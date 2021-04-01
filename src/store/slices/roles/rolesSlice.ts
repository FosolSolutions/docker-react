import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// eslint-disable-next-line prettier/prettier
import type { RootState } from '../../store';
import { IRole, IRolesStore } from '.';

// Define the initial state using that type
const initialState: IRolesStore = {
  total: 0,
  roles: [],
};

export const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    addRole: (state: IRolesStore, action: PayloadAction<IRole>) => {
      state.roles = [...state.roles, action.payload];
    },
    removeRole: (state: IRolesStore, action: PayloadAction<IRole>) => {
      state.roles = state.roles.filter((r) => r.id !== action.payload.id);
    },
  },
});

export const { addRole, removeRole } = rolesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const RolesState = (state: RootState) => state.roles;

export const { reducer: rolesReducer } = rolesSlice;

export default rolesSlice.reducer;
