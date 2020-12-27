import {AUsersLoginSuccess} from '../users/types';

export type LibrariesState = {
  [key: string]: Library;
};

export type Library = {
  data: LibraryData;
  settings: LibrarySettings;
  medias: string[]; // strings refer to IDs in media store
};

export const LIBRARIES_SET = 'LIBRARIES/SET';

export interface ALibrariesSet {
  type: typeof LIBRARIES_SET;
  libraries: LibraryData[];
}

export const LIBRARIES_GET_ERROR = 'LIBRARIES/GET_ERROR';

export interface ALibrariesGetError {
  type: typeof LIBRARIES_GET_ERROR;
  status: number;
  message: string;
}

// Loginsuccess is a libraryaction because we need to receive it
export type LibrariesActionType =
  | AUsersLoginSuccess
  | ALibrariesSet
  | ALibrariesGetError;

// API description of a library (called a View)
export type LibraryData = {
  Id: string;
  Name: string;
  ServerId: string;
  Etag: string;
  DateCreated: string;
  CanDelete: boolean;
  CanDownload: boolean;
  SortName: string;
  ExternalUrls: []; // What are those?
  Path: string;
  EnableMediaSourceDisplay: boolean;
  ChannelId: string; // what is this? Was a bunch of 0's
  Taglines: [];
  Genres: [];
  PlayAccess: PlayAccessEnum; // TODO: Figure out the rest of the enum
  RemoteTrailers: [];
  ProviderIds: {};
  IsFolder: boolean;
  ParentId: string;
  Type: LibraryType;
  People: [];
  Studios: [];
  GenreItems: [];
  LocalTrailerCount: number;
  UserData: {
    PlaybackPositionTicks: number;
    PlayCount: number;
    IsFavorite: boolean;
    Played: boolean;
    Key: string;
  };
  ChildCount: number;
  SpecialFeatureCount: number;
  DisplayPreferencesId: string;
  Tags: [];
  PrimaryImageAspectRatio: number; // this is width/height
  CollectionType: CollectionTypeEnum; // TODO: Figure out rest of this enum
  ImageTags: {
    Primary?: string; // I assume this is optional
  };
  BackdropImageTags: string[];
  ScreenshotImageTags: string[];
  ImageBlurHashes: {
    Primary: {
      [key: string]: string;
    };
  };
  LocationType: LocationTypeEnum; // TODO: Figure out rest of this enum
  LockedFields: [];
  LockData: false;
};

type PlayAccessEnum = 'Full';

type LibraryType = 'CollectionFolder';

type CollectionTypeEnum = 'music' | 'movies' | 'tvshows';

type LocationTypeEnum = 'FileSystem';

export type LibrarySettings = {
  sortBy: SortByEnum;
  sortOrder: SortOrderEnum;
};

type SortByEnum =
  | 'Name'
  | 'AlbumArtist'
  | 'CommunityRating'
  | 'CriticRating'
  | 'DateCreated'
  | 'ProductionYear'
  | 'Random';

type SortOrderEnum = 'Ascending' | 'Descending';
