import {JFAErrorCode} from '../type';
import {
  Users,
  UsersActionType,
  UsersState,
  USERS_ADD,
  USERS_GET_PUBLIC_FAILED,
} from './types';

const initialState: UsersState = {
  list: {},
};

const usersReducer = (state = initialState, action: UsersActionType) => {
  switch (action.type) {
    case USERS_ADD: {
      return {
        ...state,
        list: {
          ...state.list,
          ...action.users.reduce(
            (acc: Users, curr) => ({
              ...acc,
              [curr.ServerId]: curr,
            }),
            {},
          ),
        },
      };
    }
    case USERS_GET_PUBLIC_FAILED:
      return {
        ...state,
        error: {
          code: JFAErrorCode.EGET_PUBLIC_USERLIST,
          status: action.status,
          message: action.message,
        },
      };
    default:
      return state;
  }
};

export default usersReducer;
