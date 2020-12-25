import {LibrariesActionType, LibrariesState, LIBRARIES_SET} from './types';

const initialState: LibrariesState = {};

const librariesReducer = (
  state = initialState,
  action: LibrariesActionType,
) => {
  switch (action.type) {
    case LIBRARIES_SET:
      const libraries = action.libraries;
      const dict: LibrariesState = {};
      libraries.forEach((library) => {
        dict[library.Id] = library;
      });
      return dict;
    default:
      return state;
  }
};

export default librariesReducer;
