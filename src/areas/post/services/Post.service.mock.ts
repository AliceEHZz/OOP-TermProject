import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import { post, posts } from "../../../model/fakeDB";
import { MockAuthenticationService } from "../../authentication/services/Authentication.service.mock";

// ⭐️ Feel free to change this class in any way you like. It is simply an example...
export class MockPostService implements IPostService {
  addPost(post: IPost, username: string): void {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  getAllPosts(username: string): IPost[] {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  findById(id: string): IPost {
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

  modifyLikes(post_id: string, user_email: string): void {
    let post = this.findById(post_id);

    let index = post.likesList.findIndex((email) => email == user_email);
    if (index > -1) {
      // If object with matching email exists, remove it from array
      post.likesList.splice(index, 1);
    } else {
      // If object with matching email doesn't exist, add new object to array
      post.likesList.push(user_email);
    }
  }
}
