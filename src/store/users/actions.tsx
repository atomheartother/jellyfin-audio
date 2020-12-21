import {
  AUserListAdd,
  AUserListGetPublic,
  AUsertListGetPublicError,
  User,
  USERLIST_ADD,
  USERLIST_GET_PUBLIC,
  USERLIST_GET_PUBLIC_FAILED,
} from './types';

export const userListAdd = (users: User[]): AUserListAdd => ({
  type: USERLIST_ADD,
  users,
});

export const userListGetPublic = (): AUserListGetPublic => ({
  type: USERLIST_GET_PUBLIC,
});

export const userListGetPublicError = (
  status: number,
  message: string,
): AUsertListGetPublicError => ({
  type: USERLIST_GET_PUBLIC_FAILED,
  status,
  message,
});
