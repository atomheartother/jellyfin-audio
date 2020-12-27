import {AUsersLoginSuccess, USERS_LOGIN_SUCCESS} from '../users/types';
import {
  UserActionType,
  SessionState,
  SET_SERVER_URL,
  USER_LOGOUT,
} from './types';

const initialState: SessionState = {
  url: '',
  token: '',
  session: null,
};

export const computeHeadersFromStore = ({token}: SessionState): Object => {
  // TODO: make this vary between platforms & devices
  // Maybe compute it at startup?
  let authString =
    'MediaBrowser Client="Jellyfin Audio", DeviceId="QW5kcm9pZCBKZWxseWZpbiBBdWRpbyAwLjF8MDAwMDA=", Device="Android", Version="0.1"';
  if (token) {
    authString += `, Token="${token}"`;
  }
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Emby-Authorization': authString,
  };
};

const sessionReducer = (
  state = initialState,
  action: UserActionType | AUsersLoginSuccess,
) => {
  switch (action.type) {
    case SET_SERVER_URL:
      return {
        ...state,
        url: action.url,
      };
    case USER_LOGOUT:
      return {
        ...state,
        token: '',
        session: null,
      };
    case USERS_LOGIN_SUCCESS:
      const {
        response: {SessionInfo, AccessToken},
      } = action;
      return {
        ...state,
        session: SessionInfo,
        token: AccessToken,
      };
    default:
      return state;
  }
};

export default sessionReducer;
