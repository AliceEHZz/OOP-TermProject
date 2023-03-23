import ISearch from "../../../interfaces/search.interface";
import ISearchService from "./ISearchService";
import IPost from "../../../interfaces/post.interface";
import IUser from "../../../interfaces/user.interface";

// ❗️ Implement this class much later, once everything works fine with your mock db
export class SearchService implements ISearchService {
  showUserResult = (searchInput: string): IUser[] => {
    throw new Error("wait for prisma");
  };

  showPostResult = (searchInput: string): IPost[] => {
    throw new Error("wait for prisma");
  };

  modifyFollowing(post_id: number, user_email: string): void {}
}
