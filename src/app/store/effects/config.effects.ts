import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Config } from '../..//models/config.model';
import { ConfigService } from '../../services/config.service';
import {
  ConfigActionsList,
  GetConfig,
  GetConfigSuccess
} from '../actions/config.actions';

@Injectable()
export class ConfigEffects {
  @Effect()
  getConfig = this.actions.pipe(
    ofType<GetConfig>(ConfigActionsList.GetConfig),
    switchMap(() => this.configService.getConfig()),
    switchMap((config: Config) => {
      return of(new GetConfigSuccess(config));
    })
  );

  constructor(
    private configService: ConfigService,
    private actions: Actions
  ) {}
}
