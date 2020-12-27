import {SessionInfo} from '../users/types';

// User is an internal representation of the info we need to identify to the server
// It is NOT an API description. That's in users.
// Info here will be **persisted**
export interface SessionState {
  // URL of the server to connect to
  url: string;
  // User token, identifies a valid session
  token: string;
  // Session info, contains a bunch of information
  session: SessionInfo | null;
}

export const SET_SERVER_URL = 'SESSION/SET_URL';

export interface ASetServerUrl {
  type: typeof SET_SERVER_URL;
  url: string;
}

export const USER_LOGOUT = 'SESSION/LOGOUT';

interface ALogout {
  type: typeof USER_LOGOUT;
}

export type UserActionType = ASetServerUrl | ALogout;
