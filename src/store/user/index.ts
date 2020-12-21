import {
  UserActionType,
  UserState,
  SET_SERVER_URL,
  USER_LOGOUT,
  SET_TOKEN,
} from './types';

const initialState: UserState = {
  url: '',
  id: '',
  token: '',
  remember: false,
  deviceId: '',
};

export const computeHeadersFromStore = (state: UserState): Object => {
  let authString =
    'MediaBrowser Client="JellyfinAudio", Device="Mobile", Version="0.1"';
  if (state.deviceId) {
    authString += `, DeviceId="${state.deviceId}"`;
  }
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Emby-Authorization': authString,
  };
};

const serverReducer = (state = initialState, action: UserActionType) => {
  switch (action.type) {
    case SET_SERVER_URL:
      return {
        ...state,
        url: action.url,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case USER_LOGOUT:
      return {
        ...state,
        token: '',
      };
    default:
      return state;
  }
};

export default serverReducer;
