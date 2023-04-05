import IPost from "./post.interface";

export default interface IUser {
  id: number;
  username?: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  posts?: Array<IPost>;
  following?: Array<number>;
  role?: string;
}
