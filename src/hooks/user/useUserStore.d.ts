export interface ISessionData {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

export interface IUserData {
  name: string;
  email: string;
}

export interface IUseUserStore {
  userData: IUserData | null;
  sessionData: ISessionData | null;
  setData: (userData: IUserData, sessionData: ISessionData) => void;
  cleanData: () => void;
}
