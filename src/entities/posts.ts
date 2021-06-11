import { ISingleUser } from "./user";

export interface ISinglePost {
    text: string;
    image: string;
    likes: number;
    link: string;
    tags: string[];
    publishDate: string;
    owner: ISingleUser
};