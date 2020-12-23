import {LibrariesActionType, LibrariesState} from './types';

const initialState: LibrariesState = {};

const librariesReducer = (
  state = initialState,
  action: LibrariesActionType,
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default librariesReducer;
