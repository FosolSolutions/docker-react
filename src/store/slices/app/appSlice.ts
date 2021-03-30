import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IAppStore } from '.';

const initialState: IAppStore = {
  loading: false,
  requests: [],
};

/**
 * Reducers and Actions for users.
 */
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    onRequest: (state: IAppStore, action: PayloadAction<string>) => {
      if (!state.loading) state.loading = true;
      state.requests.push(action.payload ?? 'request');
    },
    onResponse: (state: IAppStore, action: PayloadAction<string>) => {
      if (state.loading) state.loading = false;
      state.requests.splice(state.requests.indexOf(action.payload ?? 'request'), 1);
    },
  },
});

// Export all the actions for the reducers.
export const { onRequest } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const appState = (state: RootState) => state.app;

export const { reducer: appReducers } = appSlice;

export default appSlice.reducer;
