import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IUser, IUsersStore } from '.';

// Define the initial state using that type
const initialState: IUsersStore = {
  total: 0,
  users: [],
};

/**
 * Reducers and Actions for users.
 */
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetch: (state: IUsersStore, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
    add: (state: IUsersStore, action: PayloadAction<IUser>) => {
      state.users = [...state.users, action.payload];
    },
    remove: (state: IUsersStore, action: PayloadAction<IUser>) => {
      state.users = state.users.filter((u) => u.id !== action.payload.id);
    },
  },
});

// Export all the actions for the reducers.
export const { fetch, add, remove } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const usersState = (state: RootState) => state.users;

export const { reducer: usersReducer } = usersSlice;

export default usersSlice.reducer;
