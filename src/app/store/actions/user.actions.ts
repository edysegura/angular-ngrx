import { Action } from '@ngrx/store';

import { User } from '../../models/user.model';

export enum UserActionsList {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action {
  readonly type = UserActionsList.GetUsers;
}

export class GetUsersSuccess implements Action {
  readonly type = UserActionsList.GetUsersSuccess;
  constructor(public payload: User[]) {}
}

export class GetUser implements Action {
  readonly type = UserActionsList.GetUsers;
  constructor(public payload: number) {}
}

export class GetUserSuccess implements Action {
  readonly type = UserActionsList.GetUsers;
  constructor(public payload: User) {}
}

export type UserActions = GetUsers
  | GetUsersSuccess
  | GetUser
  | GetUserSuccess;
