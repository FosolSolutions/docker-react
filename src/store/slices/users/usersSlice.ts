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
    fetchUsers: (state: IUsersStore, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
    addUser: (state: IUsersStore, action: PayloadAction<IUser>) => {
      state.users = [...state.users, action.payload];
    },
    updateUser: (state: IUsersStore, action: PayloadAction<IUser>) => {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index >= 0) {
        state.users = state.users.slice(index);
        state.users[index] = action.payload;
      }
    },
    removeUser: (state: IUsersStore, action: PayloadAction<IUser>) => {
      state.users = state.users.filter((u) => u.id !== action.payload.id);
    },
  },
});

// Export all the actions for the reducers.
export const { fetchUsers, addUser, updateUser, removeUser } = usersSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const usersState = (state: RootState) => state.users;

export const { reducer: usersReducer } = usersSlice;

export default usersSlice.reducer;
