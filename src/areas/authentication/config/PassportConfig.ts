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

import passport, { serializeUser, deserializeUser } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { IAuthenticationService } from "../services";

export default class PassportConfig {
  authService: IAuthenticationService;

  public constructor(service: IAuthenticationService) {
    this.initializeLocalStrategy();
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
    passport.serializeUser(function (user, done: (err: any, email?: string) => void) {
      done(null, (user as any).email);
    });
    passport.deserializeUser(function (user, done: (err: any, user?: false | Express.User | null | undefined) => void) {
      if (user) {
        done(null, user);
      } else {
        done({ message: "User not found" }, null);
      }
    });
  }
}
