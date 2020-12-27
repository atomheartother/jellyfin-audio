import {
  LibrariesActionType,
  LibrariesState,
  LIBRARIES_SET,
  LibrarySettings,
} from './types';

const defaultLibrarySettings: LibrarySettings = {
  sortBy: 'Name',
  sortOrder: 'Ascending',
};

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
        if (state[library.Id]) {
          dict[library.Id] = {
            ...state[library.Id],
            data: library,
          };
        } else {
          dict[library.Id] = {
            data: library,
            settings: {...defaultLibrarySettings},
            medias: [],
          };
        }
      });
      return dict;
    default:
      return state;
  }
};

export default librariesReducer;
