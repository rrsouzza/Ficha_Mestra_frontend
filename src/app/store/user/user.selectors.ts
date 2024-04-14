import { createSelector } from "@ngrx/store";
import { userSelector } from "../app.selectors";

export const userId = createSelector(userSelector, (user) => user.id);

export const userName = createSelector(userSelector, (user) => user.name);

export const userEmail = createSelector(userSelector, (user) => user.email);
