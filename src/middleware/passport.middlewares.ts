import { MockAuthenticationService } from "../areas/authentication/services";
import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  new PassportConfig(new MockAuthenticationService());
};
