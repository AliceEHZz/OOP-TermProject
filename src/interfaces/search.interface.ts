import IUser from "./user.interface";

interface ISearch {
  users: IUser[];
  userId: string;
  message: string;
  createdAt: Date;
}

export default ISearch;
