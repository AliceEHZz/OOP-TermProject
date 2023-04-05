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
    this.router.get(`${this.path}/follow`, ensureAuthenticated, this.followController);
  }
  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary posts object
  private searchResult = async (req: Request, res: Response) => {
    let input = req.query.query.toString();
    const currentUser = await req.user;
    const currentUserId = currentUser["id"];
    const currentUserFollowing = currentUser["following"];

    let userResult = this.searchService.showUserResult(input);
    let postResult = this.searchService.showPostResult(input);
    res.render("search/views/search", { currentUserFollowing, currentUserId, userResult, postResult });
  };
  private followController = async (req: Request, res: Response) => {
    let searchResultUserId = await req.query.id.toString();
    const currentUser = await req.user;
    console.log();
    const currentUserId = currentUser["id"];
    this.searchService.modifyFollowing(parseInt(searchResultUserId), currentUserId);
    res.redirect("back");
  };
}

export default SearchController;
