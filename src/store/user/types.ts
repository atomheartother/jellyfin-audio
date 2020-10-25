export interface UserState {
  // URL of the server to connect to
  url: string;
  // User token, identifies a valid session
  token: string;
  // User ID
  id: string;
  // Whether we should remember the user in between logins
  remember: boolean;
}

export const SET_SERVER_URL = 'USER/SET_URL';

export interface ASetServerUrl {
  type: typeof SET_SERVER_URL;
  url: string;
}

export const USER_LOGOUT = 'USER/LOGOUT';

interface ALogout {
  type: typeof USER_LOGOUT;
}

export const SET_TOKEN = 'USER/SET_TOKEN';

export interface ASetToken {
  type: typeof SET_TOKEN;
  token: string;
}

export type UserActionType = ASetServerUrl | ALogout | ASetToken;
