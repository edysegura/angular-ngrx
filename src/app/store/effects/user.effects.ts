import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { Users } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import {
  GetUser,
  GetUsers,
  GetUsersSuccess,
  GetUserSuccess,
  UserActionsList
} from '../actions/user.actions';
import { selectUserList } from '../selectors/user.selector';
import { AppState } from '../state/app.state';

@Injectable()
export class UserEffects {
  @Effect()
  getUser = this.actions.pipe(
    ofType<GetUser>(UserActionsList.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      const selectedUser = users.find(user => user.id === +id);
      return of(new GetUserSuccess(selectedUser));
    })
  );

  @Effect()
  getUsers = this.actions.pipe(
    ofType<GetUsers>(UserActionsList.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((data: Users) => of(new GetUsersSuccess(data.users)))
  );

  constructor(
    private userService: UserService,
    private actions: Actions,
    private store: Store<AppState>
  ) {}
}
