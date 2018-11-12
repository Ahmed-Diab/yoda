import { Comment } from "./comment";

export class Post {
    body:string;
    comment:any;
    commentsLength: number;
    createdAt: Date;
    userId: string;
    userImage: string;
    username: string;
    _id: string;
}