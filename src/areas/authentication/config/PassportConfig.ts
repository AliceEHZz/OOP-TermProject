//----------------------------------------
// TODO:                                 |
//----------------------------------------
// 🚀 Configure Passport.js Local Authentication in this file
//    Ensure code is fully typed (as we're using ts) wherever possible (unless inference can be made)
/**
 * 1. Your local strategy
 * 2. serializeUser
 * 3. deserializeUser
 */

import passport from "passport";
import { Request } from "express";
import { Strategy as LocalStrategy } from "passport-local";
import { IAuthenticationService } from "../services";
import { database } from "../../../model/fakeDB";
import IUser from "../../../interfaces/user.interface";

export default class PassportConfig {
  authService: IAuthenticationService;

  public constructor(service: IAuthenticationService) {
    this.initializeLocalStrategy();
    this.initializeLocalRegisterStrategy();
    this.authService = service;
  }

  private initializeLocalStrategy(): void {
    passport.use(
      new LocalStrategy(
        {
          usernameField: "email",
          passwordField: "password",
        },
        async (email: string, password: string, done: any) => {
          try {
            const user = await this.authService.getUserByEmailAndPassword(email, password);
            if (user) return done(null, user);
          } catch (err: any) {
            return done(null, false, { message: err.message });
          }
        }
      )
    );
    passport.serializeUser(function (user, done: (err: any, email: string) => void) {
      done(null, (user as any).email);
    });
    passport.deserializeUser(function (
      email,
      done: (err: any, user?: false | Express.User | null | undefined) => void
    ) {
      const user = this.authService.findUserByEmail(email);
      if (user) {
        done(null, user);
      } else {
        done({ message: "User not found" }, null);
      }
    });
  }

  private initializeLocalRegisterStrategy(): void {
    passport.use(
      "local-signup",
      new LocalStrategy(
        {
          usernameField: "email",
          passwordField: "password",
          passReqToCallback: true,
        },
        async (req: Request, email: string, password: string, done: any) => {
          const { firstName, lastName } = req.body;

          if (!firstName || !lastName) {
            return done({ message: "There is no firstName and/or lastName" }, null);
          }

          let foundUser;

          for (const user of database.users) {
            if (user.email === email) {
              foundUser = true;
              break;
            }
          }

          if (foundUser) {
            done({ message: "A user is already using that email" }, null);
          } else {
            const newUser: IUser = {
              id: String(database.users.length + 1),
              email,
              password,
              firstName,
              lastName,
              username: `${firstName.toLowerCase()}${lastName.toLowerCase()}`,
            };

            database.users.push(newUser);
            done(null, newUser);
          }
        }
      )
    );
  }
}
