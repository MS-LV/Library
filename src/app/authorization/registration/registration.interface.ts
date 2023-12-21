export interface IRegistrationForm {
  name: string;
  email: string;
  password: string;
}

export interface ISignInForm {
  email: string;
  password: string;
}

export interface IUserDto {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  _v: string
}

export interface IAuthorization {
  token: string,
  userInfo: IUserDto;
}
