import {combineEpics, Epic, ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import {catchError, map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {RootState} from '..';
import {userListAdd} from './actions';
import {
  AUserListAdd,
  User,
  UserListActionType,
  USERLIST_GET_PUBLIC,
} from './types';

const getUsersPublicUrl = 'users/public';

const getUsersPublicEpic: Epic<UserListActionType, AUserListAdd, RootState> = (
  action$,
  state$,
) =>
  action$.pipe(
    ofType(USERLIST_GET_PUBLIC),
    withLatestFrom(state$),
    mergeMap(([, {user: {url}}]) =>
      ajax.getJSON<User[]>(`${url}/${getUsersPublicUrl}`).pipe(
        map(userListAdd),
        catchError((error: AjaxError) => {
          console.error(error.message);
          return of(userListAdd([]));
        }),
      ),
    ),
  );

export default combineEpics(getUsersPublicEpic);
