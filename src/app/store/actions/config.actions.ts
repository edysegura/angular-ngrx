import { Action } from '@ngrx/store';

import { Config } from '../../models/config.model';

export enum ConfigActionsList {
  GetConfig = '[Config] Get Config',
  GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfig implements Action {
  readonly type = ConfigActionsList.GetConfig;
}

export class GetConfigSuccess implements Action {
  readonly type = ConfigActionsList.GetConfigSuccess;
  constructor(public payload: Config) {}
}

export type ConfigActions = GetConfig | GetConfigSuccess;
