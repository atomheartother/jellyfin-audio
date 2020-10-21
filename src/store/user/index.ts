import {
  ServerActionType,
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
};

const serverReducer = (state = initialState, action: ServerActionType) => {
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
