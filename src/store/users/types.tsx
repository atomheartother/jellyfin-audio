import {JFAError} from '../type';

export type Users = {[key: string]: User};

export type UsersState = {
  list: Users;
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

export const USERS_LOGIN = 'USERS/LOGIN';

export interface AUsersLogin {
  type: typeof USERS_LOGIN;
  username: string;
  password: string;
}

export const USERS_LOGIN_SUCCESS = 'USERS/LOGIN_SUCCESS';

export interface AUsersLoginSuccess {
  type: typeof USERS_LOGIN_SUCCESS;
  response: LoginResponseType;
}

export const USERS_LOGIN_ERROR = 'USERS/LOGIN_ERROR';

export interface AUsersLoginError {
  type: typeof USERS_LOGIN_ERROR;
  status: number;
  message: string;
}

export type UsersActionType =
  | AUsersAdd
  | AUsersGetPublic
  | AUsersGetPublicError
  | AUsersLogin
  | AUsersLoginSuccess
  | AUsersLoginError;

export type LoginResponseType = {
  User: User;
  SessionInfo: SessionInfo;
  AccessToken: string;
  ServerId: string;
};

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

export type SessionInfo = {
  PlayState: {
    CanSeek: boolean;
    IsPaused: boolean;
    IsMuted: boolean;
    RepeatMode: 'RepeatNone'; // TODO: Make an enum with the other values
  };
  AdditionalUsers: []; // ??
  Capabilities: {
    PlayableMediaTypes: PlayableMedia[];
    SupportedCommands: SupportedCommand[];
    SupportsMediaControl: true;
    SupportsContentUploading: false;
    SupportsPersistentIdentifier: false;
    SupportsSync: false;
  };
  RemoteEndPoint: string; // IP
  PlayableMediaTypes: PlayableMedia[];
  Id: string;
  UserId: string;
  UserName: string;
  Client: string;
  LastActivityDate: string;
  LastPlaybackCheckIn: string;
  DeviceName: string;
  DeviceId: string;
  ApplicationVersion: string;
  IsActive: boolean;
  SupportsMediaControl: boolean;
  SupportsRemoteControl: boolean;
  HasCustomDeviceName: boolean;
  ServerId: string;
  UserPrimaryImageTag: string;
  SupportedCommands: SupportedCommand[];
};

// TODO: Check the other possible values
type PlayableMedia = 'Audio' | 'Video';

// TODO: Check the other possible values
type SupportedCommand =
  | 'MoveUp'
  | 'MoveDown'
  | 'MoveLeft'
  | 'MoveRight'
  | 'PageUp'
  | 'PageDown'
  | 'PreviousLetter'
  | 'NextLetter'
  | 'ToggleOsd'
  | 'ToggleContextMenu'
  | 'Select'
  | 'Back'
  | 'SendKey'
  | 'SendString'
  | 'GoHome'
  | 'GoToSettings'
  | 'VolumeUp'
  | 'VolumeDown'
  | 'Mute'
  | 'Unmute'
  | 'ToggleMute'
  | 'SetVolume'
  | 'SetAudioStreamIndex'
  | 'SetSubtitleStreamIndex'
  | 'DisplayContent'
  | 'GoToSearch'
  | 'DisplayMessage'
  | 'SetRepeatMode'
  | 'SetShuffleQueue'
  | 'ChannelUp'
  | 'ChannelDown'
  | 'PlayMediaSource'
  | 'PlayTrailers';
