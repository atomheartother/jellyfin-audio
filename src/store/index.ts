import {createStore, combineReducers, applyMiddleware} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import user from './user';
import userList from './userList';
import userEpics from './user/epics';

const rootEpic = combineEpics(userEpics);

const rootReducer = combineReducers({
  user,
  userList,
});

export type RootState = ReturnType<typeof rootReducer>;

const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
