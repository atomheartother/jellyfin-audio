import {
  ALibrariesGetError,
  ALibrariesSet,
  LIBRARIES_GET_ERROR,
  LIBRARIES_SET,
  LibraryData,
} from './types';

export const setLibraries = (libraries: LibraryData[]): ALibrariesSet => ({
  type: LIBRARIES_SET,
  libraries,
});

export const librariesGetError = (
  status: number,
  message: string,
): ALibrariesGetError => ({
  type: LIBRARIES_GET_ERROR,
  status,
  message,
});
