import {IUpConfigs} from "../shared/shared.interface";

declare var upConfig: IUpConfigs;

export enum UrlsList {
  redirectTo = '/home',
  authTo = 'authorization/sign-in',

  adminRedirectTo = '/admin',

  // request to server list
  user = 'users',
  userCreate = 'users/create',
  userVerify = 'users/verify',

  admin = 'admin',
  adminCreate = 'admin/create',
  adminVerify = 'admin/verify',

  book = 'books',
}

export function urlPathHandler(url: string, id: string = ''): string {
  const serverHost = upConfig.serverHost.replace(/\/+$/, '');
  return `${serverHost}/${url}/${id}`;
}
