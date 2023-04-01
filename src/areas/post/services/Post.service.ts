import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// ❗️ Implement this class much later, once everything works fine with your mock db
export class PostService implements IPostService {
  addPost(post: IPost, username: string): void {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  getAllPosts(username: string): IPost[] {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  findById(id: number): IPost {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  addCommentToPost(message: { id: string; createdAt: string; userId: string; message: string }, postId: string): void {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }

  sortPosts(posts: IPost[]): IPost[] {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  modifyLikes(post_id: number, user_email: string): void {}
}
