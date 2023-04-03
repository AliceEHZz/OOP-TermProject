import { database, userDatabase } from "../../../model/fakeDB";
import IUser from "../../../interfaces/user.interface";
import IUserData from "../../../interfaces/userData.interface";
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

  public async findUserById(id: String): Promise<null | IUser> {
    let user = this._db.users.find((user) => user.id == id);
    if (user) {
      return user;
    } else {
      throw new Error(`Couldn't find user with id`);
    }
  }

  public async createUser(userData: IUserData): Promise<IUser> {
    const { firstName, lastName, email, password, username } = userData;

      if (!firstName || !lastName) {
        throw new Error("There is no firstName and/or lastName");
      }

      const foundUser = this._db.users.find((user) => user.email == email)
      if (foundUser) {
        throw new Error(`A user is already using email: ${email}`);
      }

      const newUser: IUser = {
        id: String(database.users.length + 1),
        email,
        password,
        firstName,
        lastName,
        username: username || `${firstName.toLowerCase()}${lastName.toLowerCase()}`,
      };

      database.users.push(newUser);
      return newUser;
  }
}
