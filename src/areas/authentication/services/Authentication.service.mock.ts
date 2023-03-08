import { database } from "../../../model/fakeDB";
import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService } from "./IAuthentication.service";

export class MockAuthenticationService implements IAuthenticationService {
  readonly _db = database;

  public async findUserByEmail(email: String): Promise<null | IUser> {
    let user = this._db.users.find((user) => user.email == email);
    if (user) {
      return user;
    } else {
      throw new Error(`Couldn't find user with email: ${email}`);
    }
  }

  public async getUserByEmailAndPassword(email: string, password: string): Promise<IUser> {
    let user = this.findUserByEmail(email);
    if (user) {
      if ((await user).password === password) {
        return user;
      } else {
        throw new Error(`Couldn't find user with password: ${password} `);
      }
    } else {
      throw new Error(`Couldn't find user with email: ${email}`);
    }
  }

  public async createUser(user: any): Promise<IUser> {
    throw new Error("Method not implemented");
  }
}