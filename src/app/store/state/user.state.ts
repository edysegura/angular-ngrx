import { User } from '../../models/user.model';

export interface UserState {
  users: User[];
  selectedUser: User;
}

export const initialUserState: UserState = {
  users: null,
  selectedUser: null
};
