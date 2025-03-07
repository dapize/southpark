export interface IUser {
  id: string;
  email: string;
  name: string;
}

export interface IPostLoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  user: IUser;
}

