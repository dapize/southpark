import { IPostLoginResponse } from './user.d';

export const postLogin = async ({ email, password }: { email:string, password: string }): Promise<IPostLoginResponse> => {
  return new Promise((resolve) => {
    // This is a fake response service
    console.log({ email, password });
    setTimeout(() => {
      resolve({
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwNjMyMzMyMCwiZXhwIjoxNjA2MzI2OTIwfQ.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYwNjMyMzMyMCwiZXhwIjoxNjA2NDMwNzIwfQ.HyA5l7WZgdbCewvjEGcwQRdqC6oySPaU9Omf6ISu1Tg",
        "token_type": "Bearer",
        "expires_in": 3600,
        "user": {
          "id": 'dd0c1d4d779cdeb8f4d19caa512c14fc',
          "name": "Daniel P Z",
          "email": "danielpz@outlook.com"
        }
      }
      )
    }, 2000)
  })
};
