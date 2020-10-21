import {
  USER_LOGOUT,
  ServerActionType,
  SET_SERVER_URL,
  SET_TOKEN,
} from './types';

export const setServerUrl = (url: string): ServerActionType => ({
  type: SET_SERVER_URL,
  url,
});

export const logout = (): ServerActionType => ({
  type: USER_LOGOUT,
});

export const setToken = (token: string): ServerActionType => ({
  type: SET_TOKEN,
  token,
});
