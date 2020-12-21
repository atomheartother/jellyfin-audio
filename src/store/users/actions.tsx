import {
  AUsersAdd,
  AUsersGetPublic,
  AUsersGetPublicError,
  AUsersLoginError,
  AUsersLoginSuccess,
  LoginResponseType,
  User,
  USERS_ADD,
  USERS_GET_PUBLIC,
  USERS_GET_PUBLIC_FAILED,
  USERS_LOGIN_ERROR,
  USERS_LOGIN_SUCCESS,
} from './types';

export const usersAdd = (users: User[]): AUsersAdd => ({
  type: USERS_ADD,
  users,
});

export const usersGetPublic = (): AUsersGetPublic => ({
  type: USERS_GET_PUBLIC,
});

export const userListGetPublicError = (
  status: number,
  message: string,
): AUsersGetPublicError => ({
  type: USERS_GET_PUBLIC_FAILED,
  status,
  message,
});

export const loginSuccess = (
  response: LoginResponseType,
): AUsersLoginSuccess => ({
  type: USERS_LOGIN_SUCCESS,
  response,
});

export const loginError = (
  status: number,
  message: string,
): AUsersLoginError => ({
  type: USERS_LOGIN_ERROR,
  status,
  message,
});
