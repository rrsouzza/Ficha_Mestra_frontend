import { Action } from "@ngrx/store";

interface Payload {
  id?: string;
  email?: string;
  name?: string;
}

export enum UserActions {
  SET_USER = '[User] Set User',
  UPDATE_USER = '[User] Update User',
}

export class SetUser implements Action {
  readonly type: string = UserActions.SET_USER;

  constructor(public payload: Payload) { }
}

export class UpdateUser implements Action {
  readonly type: string = UserActions.UPDATE_USER;

  constructor(public payload: Payload) { }
}
