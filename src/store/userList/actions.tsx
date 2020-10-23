import {
  AUserListAdd,
  AUserListGetPublic,
  User,
  USERLIST_ADD,
  USERLIST_GET_PUBLIC,
} from './types';

export const userListAdd = (users: User[]): AUserListAdd => ({
  type: USERLIST_ADD,
  users,
});

export const userListGetPublic = (): AUserListGetPublic => ({
  type: USERLIST_GET_PUBLIC,
});
