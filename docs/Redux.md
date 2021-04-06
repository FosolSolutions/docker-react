# Redux Information

More information [here](https://redux.js.org/understanding/thinking-in-redux/glossary).

## Terminology

### State

```js
type State = any;
```

The single state value that is managed by the store and returned by `getState()`.

### Action

```js
type Action = Object;
```

A plain object that represents an intention to change state. Actions must have a `type` field.

### Reducer

```js
type Reducer<S, A> = (state: S, action: A) => S;
```

A function that accepts an accumulation and value and returns a new accumulation. Reduce a collection of values down to a single value. _Do not put API calls into reducers._

### Slice

A collection of reducer logic and actions for a single feature of an app.

### Dispatching Function

```js
type BaseDispatch = (a: Action) => Action;
type Dispatch = (a: Action | AsyncAction) => any;
```

A function that accepts an action or an async action. It may or may not dispatch one more more actions to the store.

### Action Creator

```js
type ActionCreator<A, P extends any[] = any[]> = (...args: P) => Action | AsyncAction
```

A function that creates an action but does not dispatch it.

### Async Action

```js
type AsyncAction = any;
```

A value that is sent to a dispatching function, but is not yet ready for consumption by the reducer.

### Middleware

```js
type MiddlewareAPI = { dispatch: Dispatch, getState: () => State };
type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch;
```

A higher-order function that composes a dispatch function to return a new dispatch function.
It often turns async actions into actions.

### Store

```js
type Store = {
  dispatch: Dispatch
  getState: () => State
  subscribe: (listener: () => void) => () => void
  replaceReducer: (reducer: Reducer) => void
}
```

An object that holds the application state tree.

- `dispatch(action)` is the base dispatch function.
- `getState()` returns the current state of the store.
- `subscribe(listener)` registers a function to be called on state changes.
- `replaceReducer(nextReducer)` can be used to implement hot reloading and code splitting.

### Store Creator

```js
type StoreCreator = (reducer: Reducer, preloadedState: ?State) => Store;
```

A function that creates a Redux store.

### Store Enhancer

```js
type StoreEnhancer = (next: StoreCreator) => StoreCreator;
```

A higher-order function that composes a store creator to return a new, enhanced store creator.
