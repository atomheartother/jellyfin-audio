import {combineEpics, Epic, ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import {catchError, map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {RootState} from '..';
import {userListAdd, userListGetPublicError} from './actions';
import {
  AUserListAdd,
  AUsertListGetPublicError,
  User,
  UserListActionType,
  USERLIST_GET_PUBLIC,
} from './types';
import {navigate} from '../../RootNavigation';
const getUsersPublicUrl = 'users/public';

const getUsersPublicEpic: Epic<
  UserListActionType,
  AUserListAdd | AUsertListGetPublicError,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType(USERLIST_GET_PUBLIC),
    withLatestFrom(state$),
    mergeMap(([, {user: {url}}]) =>
      ajax.getJSON<User[]>(`${url}/${getUsersPublicUrl}`).pipe(
        map(userListAdd),
        tap(() => navigate('Login')),
        catchError((error: AjaxError) =>
          of(userListGetPublicError(error.status, error.message)),
        ),
      ),
    ),
  );

export default combineEpics(getUsersPublicEpic);
