import {combineEpics, Epic, ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import {
  catchError,
  concatMap,
  map,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import {RootState} from '..';
import {
  usersAdd,
  usersGetPublicError,
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
import {computeHeadersFromStore} from '../session';
import {getLibraries} from '../libraries/actions';
import {ALibrariesGet} from '../libraries/types';

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
    switchMap(([, {session: {url}}]) =>
      ajax.getJSON<User[]>(`${url}/${getUsersPublicUrl}`).pipe(
        map(usersAdd),
        tap(() => navigate('Login')),
        catchError((error: AjaxError) =>
          of(usersGetPublicError(error.status, error.message)),
        ),
      ),
    ),
  );

const loginEpic: Epic<
  any,
  AUsersLoginSuccess | AUsersLoginError | ALibrariesGet,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType<any, AUsersLogin>(USERS_LOGIN),
    withLatestFrom(state$),
    switchMap(([{username: Username, password: Pw}, {session}]) =>
      ajax
        .post(
          `${session.url}/${loginUrl}`,
          {
            Username,
            Pw,
          },
          computeHeadersFromStore(session),
        )
        .pipe(
          concatMap((response) =>
            of(
              loginSuccess(response.response as LoginResponseType),
              getLibraries(),
            ),
          ),
          catchError((error: AjaxError) => {
            console.error(error);
            return of(loginError(error.status, error.message));
          }),
        ),
    ),
  );

export default combineEpics(getUsersPublicEpic, loginEpic);
