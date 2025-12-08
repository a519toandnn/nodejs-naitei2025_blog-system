export interface UserListItem {
    name: string;
    email: string;
    username: string;
    bio: string;
    image: string;
    article_count: number;
    follower_count: number;
    following_count: number;
    role: 'USER' | 'ADMIN';
    created_at: string;
}