import {USER_LOGOUT, UserActionType, SET_SERVER_URL} from './types';

export const setServerUrl = (url: string): UserActionType => ({
  type: SET_SERVER_URL,
  url,
});

export const logout = (): UserActionType => ({
  type: USER_LOGOUT,
});
