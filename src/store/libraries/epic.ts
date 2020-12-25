import {combineEpics, Epic, ofType} from 'redux-observable';
import {of} from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {RootState} from '..';
import {computeHeadersFromStore} from '../session';
import {AUsersLoginSuccess, USERS_LOGIN_SUCCESS} from '../users/types';
import {librariesGetError, setLibraries} from './actions';
import {
  ALibrariesGetError,
  ALibrariesSet,
  LibrariesActionType,
  LibraryData,
} from './types';

const getLibrariesEpic: Epic<
  LibrariesActionType,
  ALibrariesSet | ALibrariesGetError,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType<LibrariesActionType, AUsersLoginSuccess>(USERS_LOGIN_SUCCESS),
    withLatestFrom(state$),
    switchMap(([, {session}]) =>
      ajax
        .getJSON<{Items: LibraryData[]}>(
          `${session.url}/Users/${
            session.session && session.session.UserId
          }/Views`,
          computeHeadersFromStore(session),
        )
        .pipe(
          map(({Items}) => setLibraries(Items)),
          catchError((error: AjaxError) =>
            of(librariesGetError(error.status, error.message)),
          ),
        ),
    ),
  );
export default combineEpics(getLibrariesEpic);
