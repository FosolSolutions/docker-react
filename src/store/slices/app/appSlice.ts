import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IAppStore, IError } from '.';

const initialState: IAppStore = {
  loading: false,
  requests: [],
  error: null,
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
      console.debug(`onRequest: ${action.payload}`);
    },
    onResponse: (state: IAppStore, action: PayloadAction<string>) => {
      if (state.loading) state.loading = false;
      state.requests.splice(state.requests.indexOf(action.payload ?? 'request'), 1);
      console.debug(`onResponse: ${action.payload}`);
    },
    onError: (state: IAppStore, action: PayloadAction<IError>) => {
      state.error = action.payload;
      console.error(`onError: ${action.payload.message}`);
    },
    clearError: (state: IAppStore) => {
      state.error = null;
    },
  },
});

// Export all the actions for the reducers.
export const { onRequest, onResponse, onError, clearError } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const appState = (state: RootState) => state.app;

export const { reducer: appReducers } = appSlice;

export default appSlice.reducer;
