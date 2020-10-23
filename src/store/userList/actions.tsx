import {User, UserListActionType, USERLIST_ADD} from './types';

export const userListAdd = (users: User[]): UserListActionType => ({
  type: USERLIST_ADD,
  users,
});
