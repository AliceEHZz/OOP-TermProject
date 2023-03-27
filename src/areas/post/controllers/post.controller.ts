import express, { Request, Response, NextFunction, Router } from "express";
import IController from "../../../interfaces/controller.interface";
import IPostService from "../services/IPostService";
import { ensureAuthenticated } from "../../../middleware/authentication.middleware";
import { post, posts, userDatabase } from "../../../model/fakeDB";
import session from "express-session";

declare module "express-session" {
  interface SessionData {
    userEmail: string;
  }
}

class PostController implements IController {
  public path = "/posts";
  public router = Router();
  private postService: IPostService;

  constructor(service: IPostService) {
    this.initializeRoutes();
    this.postService = service;
  }

  private initializeRoutes() {
    this.router.get(this.path, ensureAuthenticated, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);
    this.router.get(`${this.path}/:id/delete`, ensureAuthenticated, this.deletePost);
    this.router.post(`${this.path}/:id/comment`, ensureAuthenticated, this.createComment);
    this.router.post(`${this.path}`, ensureAuthenticated, this.createPost);
    this.router.get(`${this.path}/:postId/like`, ensureAuthenticated, this.likePost);
  }

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary posts object
  private getAllPosts = async (req: Request, res: Response) => {
    const user = await req.user;
    const user_email = user["email"];
    res.render("post/views/posts", { posts, user, user_email });
  };

  // 🚀 This method should use your postService and pull from your actual fakeDB, not the temporary post object
  private getPostById = async (request: Request, res: Response, next: NextFunction) => {
    res.render("post/views/post", { post });
  };

  // 🚀 These post methods needs to be implemented by you
  private createComment = async (req: Request, res: Response, next: NextFunction) => {};
  private createPost = async (req: Request, res: Response, next: NextFunction) => {};
  private deletePost = async (req: Request, res: Response, next: NextFunction) => {};
  private likePost = async (req: Request, res: Response, next: NextFunction) => {
    //logic
    const post_id = req.params.postId;
    const user = await req.user;
    const user_email = user["email"];
    this.postService.modifyLikes(parseInt(post_id), user_email);
    res.redirect(this.path);
  };
}

export default PostController;
