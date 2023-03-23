import IPost from "../../../interfaces/post.interface";
import IUser from "../../../interfaces/user.interface";
import ISearchService from "./ISearchService";
import { post, posts, userDatabase } from "../../../model/fakeDB";
import { MockAuthenticationService } from "../../authentication/services/Authentication.service.mock";

export class MockSearchService {
  //implements ISearchService {
  public showUserResult = (searchInput: string): IUser[] => {
    const userResults = userDatabase.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(searchInput.toLowerCase());
    });
    return userResults;
  };

  public showPostResult = (searchInput: string): IPost[] => {
    const postResults = posts.filter((post) => {
      const postMsg = post.message.toLowerCase();
      return postMsg.includes(searchInput.toLowerCase());
    });
    return postResults;
  };

  public modifyFollowing = async (searchResultUserId: string, currentUserId: string): Promise<void> => {
    const authService = new MockAuthenticationService();
    let currentUser = await authService.findUserById(currentUserId);
    let index = currentUser["following"].findIndex((followingId) => followingId == searchResultUserId);
    if (index > -1) {
      // If object with matching id exists, remove it from array
      currentUser["following"].splice(index, 1);
    } else {
      // If object with matching id doesn't exist, means user not following, add new object to array
      currentUser["following"].push(searchResultUserId);
    }
  };
}
