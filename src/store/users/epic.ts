import {combineEpics, Epic, ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import {catchError, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {RootState} from '..';
import {
  usersAdd,
  userListGetPublicError,
  loginSuccess,
  loginError,
} from './actions';
import {
  AUsersAdd,
  AUsersGetPublic,
  AUsersGetPublicError,
  AUsersLogin,
  AUsersLoginError,
  AUsersLoginSuccess,
  LoginResponseType,
  User,
  UsersActionType,
  USERS_GET_PUBLIC,
  USERS_LOGIN,
} from './types';
import {navigate} from '../../RootNavigation';

const getUsersPublicUrl = 'users/public';
const loginUrl = 'Users/authenticatebyname';

const getUsersPublicEpic: Epic<
  UsersActionType,
  AUsersAdd | AUsersGetPublicError,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType<UsersActionType, AUsersGetPublic>(USERS_GET_PUBLIC),
    withLatestFrom(state$),
    mergeMap(([, {user: {url}}]) =>
      ajax.getJSON<User[]>(`${url}/${getUsersPublicUrl}`).pipe(
        map(usersAdd),
        tap(() => navigate('Login')),
        catchError((error: AjaxError) =>
          of(userListGetPublicError(error.status, error.message)),
        ),
      ),
    ),
  );

const loginEpic: Epic<
  UsersActionType,
  AUsersLoginSuccess | AUsersLoginError,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType<UsersActionType, AUsersLogin>(USERS_LOGIN),
    withLatestFrom(state$),
    mergeMap(([{username: Username, password: Pw}, {user: {url}}]) =>
      ajax
        .post(`${url}/${loginUrl}`, {
          Username,
          Pw,
        })
        .pipe(
          mergeMap((response) =>
            of(loginSuccess(response.response as LoginResponseType)),
          ),
          catchError((error: AjaxError) =>
            of(loginError(error.status, error.message)),
          ),
        ),
    ),
  );

export default combineEpics(getUsersPublicEpic, loginEpic);
