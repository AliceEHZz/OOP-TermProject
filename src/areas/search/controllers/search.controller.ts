import express, { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import ISearchService from "../services/ISearchService";
import { ensureAuthenticated } from "../../../middleware/authentication.middleware";
import { posts, userDatabase } from "../../../model/fakeDB";
import session from "express-session";

declare module "express-session" {
  interface SessionData {
    userEmail: string;
  }
}

class SearchController implements IController {
  public path = "/search";
  public router = Router();
  private searchService: ISearchService;

  constructor(service: ISearchService) {
    this.initializeRoutes();
    this.searchService = service;
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, ensureAuthenticated, this.searchResult);
  }

  private searchResult = (req: Request, res: Response) => {
    let input = req.query.query.toString();
    let user = req.user;
    console.log(req.user);
    let userResult = this.searchService.showUserResult(input);
    let postResult = this.searchService.showPostResult(input);
    res.render("search/views/search", { user, userResult, postResult });
  };
}

export default SearchController;
