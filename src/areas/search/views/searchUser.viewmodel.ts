import IUser from "../../../interfaces/user.interface";
import IPost from "../../../interfaces/post.interface";
import ISearch from "../../../interfaces/search.interface";

export class SearchViewModel {
  public postId: number;
  public userId: string;
  public message: string;
  public following: Array<string>;

  constructor(search: ISearch, post: IPost, user: IUser) {
    this.postId = post.postId;
    this.userId = post.userId;
    this.message = post.message;
    this.following = user.following;
  }
}
