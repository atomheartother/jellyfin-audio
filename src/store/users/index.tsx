import {JFAErrorCode} from '../type';
import {
  UserList,
  UsersActionType,
  UserListState,
  USERS_ADD,
  USERS_GET_PUBLIC_FAILED,
} from './types';

const initialState: UserListState = {
  list: {},
};

const userListReducer = (state = initialState, action: UsersActionType) => {
  switch (action.type) {
    case USERS_ADD: {
      return {
        ...state,
        list: {
          ...state.list,
          ...action.users.reduce(
            (acc: UserList, curr) => ({
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

export default userListReducer;
