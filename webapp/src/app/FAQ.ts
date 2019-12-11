import { User } from './User/User';

export interface FAQ {
    id: number;
    user: User;
    question: String;
    answer: String;
}