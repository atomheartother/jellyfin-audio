export type UserListState = {
  [key: string]: User;
};

export const USERLIST_ADD = 'USERLIST/ADD';

interface AUserListAdd {
  type: typeof USERLIST_ADD;
  users: User[];
}

export type UserListActionType = AUserListAdd;

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
  InvalidLoginAttemptCount: 0;
  LoginAttemptsBeforeLockout: -1;
  EnablePublicSharing: boolean;
  BlockedMediaFolders: [];
  BlockedChannels: [];
  RemoteClientBitrateLimit: 0;
  AuthenticationProviderId: string;
  PasswordResetProviderId: string;
  SyncPlayAccess: string;
};
