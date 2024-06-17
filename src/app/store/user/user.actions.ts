import { Action } from "@ngrx/store";

interface Payload {
  id?: string;
  email?: string;
  name?: string;
}

export enum UserTypesActions {
  SET_USER = '[User] Set User',
  UPDATE_USER = '[User] Update User',
}

export class SetUser implements Action {
  readonly type: string = UserTypesActions.SET_USER;

  constructor(public payload: Payload) { }
}

export class UpdateUser implements Action {
  readonly type: string = UserTypesActions.UPDATE_USER;

  constructor(public payload: Payload) { }
}

export type UserActions =
  SetUser |
  UpdateUser;
