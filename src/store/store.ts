import { configureStore } from '@reduxjs/toolkit';
import { appReducers } from './slices/app';
import { rolesReducer } from './slices/roles';
import { usersReducer } from './slices/users';

/**
 * Application store and reducers.
 */
export const store = configureStore({
  reducer: {
    app: appReducers,
    users: usersReducer,
    roles: rolesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
