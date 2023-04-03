import express, { Response, Request, NextFunction } from "express";
import passport from "passport";
import IController from "../../../interfaces/controller.interface";
import { IAuthenticationService } from "../services";
import { ensureAuthenticated, forwardAuthenticated } from "../../../middleware/authentication.middleware";

declare module "express-session" {
  interface SessionData {
    messages: string[];
  }
}

declare global {
  namespace Express {
    interface Request {
      logout(done: (err: any) => void): void;
    }
  }
}

class AuthenticationController implements IController {
  public path = "/auth";
  public router = express.Router();
  private authService: IAuthenticationService;

  constructor(service: IAuthenticationService) {
    this.initializeRoutes();
    this.authService = service;
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/register`, forwardAuthenticated, this.showRegistrationPage);
    this.router.post(`${this.path}/register`, this.registration);
    this.router.get(`${this.path}/login`, this.showLoginPage);
    this.router.post(`${this.path}/login`, this.login);
    this.router.get(`${this.path}/logout`, this.getLogout)
    this.router.post(`${this.path}/logout`, this.logout);
  }

  private showLoginPage = (req: Request, res: Response) => {
    const errMsg = req.session.messages;
    req.session.messages = [];
    res.render("authentication/views/login", {
      messages: errMsg,
    });
  };

  private showRegistrationPage = (req: Request, res: Response) => {
    const errMsg = req.session.messages;
    req.session.messages = []
    res.render("authentication/views/register", {
      messages: errMsg,
    });
  };

  // 🔑 These Authentication methods needs to be implemented by you
  private login = passport.authenticate("local", {
    successRedirect: "/posts",
    failureRedirect: `${this.path}/login`,
    failureMessage: true,
  });

  private registration = passport.authenticate("local-signup", {
    successRedirect: "/posts",
    failureRedirect: `${this.path}/register`,
    failureMessage: true,
  });

  private getLogout = async (req: Request, res: Response) => {
    req.logout((err) => {
      if (err) console.log(err);
    });
    res.redirect("/");
  }
  
  private logout = async (req: Request, res: Response) => {
    req.logout((err) => {
      if (err) console.log(err);
    });
    res.redirect("/");
  };
}

export default AuthenticationController;
