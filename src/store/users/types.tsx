import {JFAError} from '../type';

export type UserList = {[key: string]: User};

export type UserListState = {
  list: UserList;
  error?: JFAError;
};

export const USERS_ADD = 'USERS/ADD';

export interface AUsersAdd {
  type: typeof USERS_ADD;
  users: User[];
}

export const USERS_GET_PUBLIC = 'USERS/GET_PUBLIC';

export interface AUsersGetPublic {
  type: typeof USERS_GET_PUBLIC;
}

export const USERS_GET_PUBLIC_FAILED = 'USERS/GET_PUBLIC_FAILED';

export interface AUsersGetPublicError {
  type: typeof USERS_GET_PUBLIC_FAILED;
  status: number;
  message: string;
}

export type UsersActionType =
  | AUsersAdd
  | AUsersGetPublic
  | AUsersGetPublicError;

export type User = {
  Name: string;
  ServerId: string;
  Id: string;
  PrimaryImageTag: string;
  HasPassword: boolean;
  HasConfiguredPassword: boolean;
  HasConfiguredEasyPassword: boolean;
  EnableAutoLogin: boolean;
  LastLoginDate: string;
  LastActivityDate: string;
  Configuration: UserConfig;
  Policy: UserPolicy;
};

type UserConfig = {
  PlayDefaultAudioTrack: boolean;
  SubtitleLanguagePreference: string;
  DisplayMissingEpisodes: boolean;
  GroupedFolders: [];
  SubtitleMode: string;
  DisplayCollectionsView: boolean;
  EnableLocalPassword: boolean;
  OrderedViews: [];
  LatestItemsExcludes: [];
  MyMediaExcludes: [];
  HidePlayedInLatest: boolean;
  RememberAudioSelections: boolean;
  RememberSubtitleSelections: boolean;
  EnableNextEpisodeAutoPlay: boolean;
};

type UserPolicy = {
  IsAdministrator: boolean;
  IsHidden: boolean;
  IsDisabled: boolean;
  BlockedTags: [];
  EnableUserPreferenceAccess: boolean;
  AccessSchedules: [];
  BlockUnratedItems: [];
  EnableRemoteControlOfOtherUsers: boolean;
  EnableSharedDeviceControl: boolean;
  EnableRemoteAccess: boolean;
  EnableLiveTvManagement: boolean;
  EnableLiveTvAccess: boolean;
  EnableMediaPlayback: boolean;
  EnableAudioPlaybackTranscoding: boolean;
  EnableVideoPlaybackTranscoding: boolean;
  EnablePlaybackRemuxing: boolean;
  ForceRemoteSourceTranscoding: boolean;
  EnableContentDeletion: boolean;
  EnableContentDeletionFromFolders: [];
  EnableContentDownloading: boolean;
  EnableSyncTranscoding: boolean;
  EnableMediaConversion: boolean;
  EnabledDevices: [];
  EnableAllDevices: boolean;
  EnabledChannels: [];
  EnableAllChannels: boolean;
  EnabledFolders: [];
  EnableAllFolders: boolean;
  InvalidLoginAttemptCount: number;
  LoginAttemptsBeforeLockout: number; // -1 if none
  EnablePublicSharing: boolean;
  BlockedMediaFolders: [];
  BlockedChannels: [];
  RemoteClientBitrateLimit: 0;
  AuthenticationProviderId: string;
  PasswordResetProviderId: string;
  SyncPlayAccess: string;
};
