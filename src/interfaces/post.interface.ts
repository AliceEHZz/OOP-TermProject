import IComment from "./comment.interface";

interface IPost {
  id: string;
  message: string;
  userId: string;
  createdAt: Date;
  commentList?: Array<IComment>;
  likes: number;
  comments: number;
  likesList?: string[];
}

export default IPost;
