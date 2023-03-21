import { MockAuthenticationService } from "../areas/authentication/services";
import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";
import { Application } from "express";

module.exports = (app: Application) => {
  app.use(passport.initialize());
  app.use(passport.session());
  const passportConfig = new PassportConfig(new MockAuthenticationService());
  passportConfig.serializeUser();
  passportConfig.deserializeUser();
};
