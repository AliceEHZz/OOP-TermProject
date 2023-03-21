import IComment from "./comment.interface";

interface IPost {
  postId: number;
  userId: string;
  message: string;
  createdAt: Date;
  commentList?: Array<IComment>;
  likes: number;
  comments: number;
  likesList?: string[];
}

export default IPost;
