import passport from "passport";
import { Request } from "express";
import { Strategy as LocalStrategy } from "passport-local";
import { IAuthenticationService } from "../services";

export default class PassportConfig {
  authService: IAuthenticationService;

  public constructor(service: IAuthenticationService) {
    this.initializeLocalStrategy();
    this.initializeLocalRegisterStrategy();
    this.deserializeUser = this.deserializeUser.bind(this);
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
          try {
            const { username, firstName, lastName, } = req.body;
            const newUser = await this.authService.createUser({
              username,
              firstName,
              lastName,
              email,
              password,
            });
            if (newUser) return done(null, newUser);
          } catch (err: any) {
            return done(null, false, { message: err.message });
          }
        }
      )
    );
  }

  serializeUser() {
    passport.serializeUser(function (user, done: (err: any, email: string) => void) {
      done(null, (user as any).email);
    });
  }

  deserializeUser = () => {
    // function inside the function, may lost the function of this. 
    passport.deserializeUser((email, done: (err: any, user?: false | Express.User | null | undefined) => void) => {
      const user = this.authService.findUserByEmail(email as any);
      if (user) {
        done(null, user);
      } else {
        done({ message: "User not found" }, null);
      }
    });
  };
}
