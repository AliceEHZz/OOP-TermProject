import IPost from "../../../interfaces/post.interface";
import IUser from "../../../interfaces/user.interface";
import ISearchService from "./ISearchService";
import { post, posts, userDatabase } from "../../../model/fakeDB";
import { MockAuthenticationService } from "../../authentication/services/Authentication.service.mock";

export class MockSearchService implements ISearchService {
  showUserResult = (searchInput: string): IUser[] => {
    const userResults = userDatabase.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(searchInput.toLowerCase());
    });
    return userResults;
  };

  showPostResult = (searchInput: string): IPost[] => {
    const postResults = posts.filter((post) => {
      const postMsg = post.message.toLowerCase();
      return postMsg.includes(searchInput.toLowerCase());
    });
    return postResults;
  };

  modifyFollowing(post_id: number, user_email: string): void {}
}
