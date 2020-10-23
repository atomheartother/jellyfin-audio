import {UserListActionType, UserListState, USERLIST_ADD} from './types';

const initialState: UserListState = {};

const userListReducer = (state = initialState, action: UserListActionType) => {
  switch (action.type) {
    case USERLIST_ADD: {
      return {
        ...state,
        ...action.users.reduce(
          (acc: UserListState, curr) => ({
            ...acc,
            [curr.ServerId]: curr,
          }),
          {},
        ),
      };
    }
    default:
      return state;
  }
};

export default userListReducer;
