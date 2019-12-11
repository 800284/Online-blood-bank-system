import { User } from './User/User';

export interface BloodNotification {
    id: number;
    user: User;
    notification: String;
    status: boolean;
}