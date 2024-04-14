export interface UserState {
  id: string;
  email: string;
  name: string;
}

export const initialState: UserState = {
  id: '',
  email: '',
  name: '',
};
