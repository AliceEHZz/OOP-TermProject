import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService } from "./IAuthentication.service";
import { database, userDatabase } from "../../../model/fakeDB";
import { PrismaDBClient } from "../../../prismaClient";
import { PrismaClient } from "@prisma/client";

// ❗️ Implement this class much later, once everything works fine with your mock db
export class AuthenticationService implements IAuthenticationService {
  readonly _db: PrismaClient = PrismaDBClient.getInstance();

  async findUserByEmail(email: string): Promise<IUser> {
    let user = await this._db.user.findUnique({ where: { email: email } });
    if (user) {
      return user;
    } else {
      throw new Error(`Couldn't find user with email: ${email}`);
    }
  }
  async getUserByEmailAndPassword(email: string, password: string): Promise<IUser> {
    // 🚀 Talk to your real database here
    throw new Error("Method not implemented.");
  }
  async createUser(user: IUser): Promise<IUser> {
    // 🚀 Talk to your real database here
    throw new Error("Method not implemented.");
  }
}
