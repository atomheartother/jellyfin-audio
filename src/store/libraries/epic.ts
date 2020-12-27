import {combineEpics, Epic, ofType} from 'redux-observable';
import {REHYDRATE, RehydrateAction} from 'redux-persist';
import {EMPTY, of} from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import {
  catchError,
  concatMap,
  map,
  switchMap,
  withLatestFrom,
} from 'rxjs/operators';
import {RootState} from '..';
import {computeHeadersFromStore} from '../session';
import {getLibraries, librariesGetError, setLibraries} from './actions';
import {
  ALibrariesGet,
  ALibrariesGetError,
  ALibrariesSet,
  LibrariesActionType,
  LIBRARIES_GET,
  LibraryData,
} from './types';

// The GET_LIBRARIES handler
const getLibrariesEpic: Epic<
  LibrariesActionType,
  ALibrariesSet | ALibrariesGetError,
  RootState
> = (action$, state$) =>
  action$.pipe(
    ofType<LibrariesActionType, ALibrariesGet>(LIBRARIES_GET),
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

// On REHYDRATE, get libraries if we're logged in
const getLibrariesOnRehydrateEpic: Epic<any, ALibrariesGet, RootState> = (
  action$,
  state$,
) =>
  action$.pipe(
    ofType<any, RehydrateAction>(REHYDRATE),
    withLatestFrom(state$),
    concatMap(
      ([
        ,
        {
          session: {url, token},
        },
      ]) => {
        if (url && token) {
          return of(getLibraries());
        }
        return EMPTY;
      },
    ),
  );

export default combineEpics(getLibrariesEpic, getLibrariesOnRehydrateEpic);
