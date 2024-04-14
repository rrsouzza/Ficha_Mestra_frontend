import { AppState } from "./app.state";
import { UserState } from "./user/user.state";

export const userSelector = (state: AppState): UserState => state.user;
