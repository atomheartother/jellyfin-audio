import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers, applyMiddleware, Action} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {persistStore, persistReducer} from 'redux-persist';
import session from './session';
import users from './users';
import usersEpics from './users/epic';

const rootEpic = combineEpics(usersEpics);

const rootReducer = combineReducers({
  session,
  users,
});

export type RootState = ReturnType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware<
  Action<any>,
  Action<any>,
  RootState
>();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(epicMiddleware),
);

epicMiddleware.run(rootEpic);

export const persistor = persistStore(store);

export default store;
