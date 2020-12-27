import {
  ALibrariesGet,
  ALibrariesGetError,
  ALibrariesSet,
  LIBRARIES_GET,
  LIBRARIES_GET_ERROR,
  LIBRARIES_SET,
  LibraryData,
} from './types';

export const getLibraries = (): ALibrariesGet => ({
  type: LIBRARIES_GET,
});

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
