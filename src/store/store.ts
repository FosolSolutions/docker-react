import { configureStore } from '@reduxjs/toolkit';
import { rolesReducer } from './features/roles';
import { usersReducer } from './features/users';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    roles: rolesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
