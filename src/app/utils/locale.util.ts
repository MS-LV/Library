import {locale, fileType} from "../shared/shared.contants";
import {IUpConfigs} from "../shared/shared.interface";

declare var upConfig: IUpConfigs;

export function localePath(name: string) {
  return `${locale}/${upConfig.locale}/${name + fileType}`;
}
