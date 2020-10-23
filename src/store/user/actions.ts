import {USER_LOGOUT, UserActionType, SET_SERVER_URL, SET_TOKEN} from './types';

export const setServerUrl = (url: string): UserActionType => ({
  type: SET_SERVER_URL,
  url,
});

export const logout = (): UserActionType => ({
  type: USER_LOGOUT,
});

export const setToken = (token: string): UserActionType => ({
  type: SET_TOKEN,
  token,
});
