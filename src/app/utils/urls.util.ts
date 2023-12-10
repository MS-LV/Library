import {IUpConfigs} from "../shared/shared.interface";

declare var upConfig: IUpConfigs;

export enum UrlsList {
  redirectTo = '/home',
  authTo = 'authorization/sign-in',

  adminRedirectTo = '/admin',

  // request to server list
  registration = 'auth/create',
  signIn = 'auth',
  authVerify = 'auth/verify',

  authAdminVerify = 'admin/verify',
  registrationAdmin = 'admin/create',
  signInAdmin = 'admin',

  addBook = 'add-book/'
}

export function urlPathHandler(url: string): string {
  const serverHost = upConfig.serverHost.replace(/\/+$/, '');
  return `${serverHost}/${url}`;
}
