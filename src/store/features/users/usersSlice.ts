import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line prettier/prettier
import type { RootState } from '../../store';
import { IUser, IUsersStore } from '.';

// Define the initial state using that type
const initialState: IUsersStore = {
  total: 0,
  users: [
    {
      id: 1,
      key: 'test',
      username: 'name',
      email: 'email@test.com',
      firstName: 'first',
      lastName: 'last',
      isDisabled: false,
    },
  ],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    add: (state: IUsersStore, action: PayloadAction<IUser>) => {
      state.users = [...state.users, action.payload];
    },
    remove: (state: IUsersStore, action: PayloadAction<IUser>) => {
      state.users = state.users.filter((u) => u.id !== action.payload.id);
    },
  },
});

export const { add, remove } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const usersState = (state: RootState) => state.users;

export const { reducer: usersReducer } = usersSlice;

export default usersSlice.reducer;
