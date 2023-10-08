import {Injectable} from '@angular/core';
import {IUpConfigs} from "../shared.interface";

declare var upConfig: IUpConfigs;

@Injectable()
export class ConfigsService {
  upConfig!: IUpConfigs;

  constructor() {
    this.init();
  }

  private init() {
    this.upConfig = upConfig;
  }
}
