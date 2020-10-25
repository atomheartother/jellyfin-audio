export enum JFAErrorCode {
  EGET_PUBLIC_USERLIST,
}

export type JFAError = {
  code: JFAErrorCode;
  status?: number;
  message?: string;
};
