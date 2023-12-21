export interface IAdminRegistrationForm {
  name: string;
  email: string;
  password: string;
  accessKey: string;
}

export interface IAdminSignInForm {
  email: string;
  password: string;
}
export interface IAdminDto {
  _id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  _v: string;
}
export interface IAdminAuthorization {
  token: string;
  adminInfo: IAdminDto
}
export interface ISuccessResponse {
  message: string;
}
