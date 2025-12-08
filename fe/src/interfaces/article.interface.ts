import { Comment } from "./comment.interface";

export interface ArticleListItem {
    title: string;
    slug: string;
    description: string;
    status: "Published" | "Draft" | "Rejected" | "Pending";
    cover_image: string;
    created_at: string;
    updated_at: string;
    published_at?: string;
    views: number;
    reading_time: number;
    tagList: string[];
    comments_count: number;
    author: {
        name: string;
        image: string;
        username: string;
    }
    favorite_count: number;
}

export interface ArticleDetail extends ArticleListItem {
    body: string;
    comments: Comment[];
}