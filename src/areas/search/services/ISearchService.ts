import IPost from "../../../interfaces/post.interface";
import IUser from "../../../interfaces/user.interface";

// ⭐️ Feel free to change this interface in any way you like. It is simply an example...
export default interface ISearchService {
  showUserResult(searchInput: string): IUser[];

  showPostResult(searchInput: string): IPost[];

  modifyFollowing(searchResultUserId: number, currentUserId: number): void;
}
