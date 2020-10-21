import {combineEpics, Epic, ofType} from 'redux-observable';
import {SET_SERVER_URL, SET_TOKEN, ASetServerUrl, ASetToken} from './types';
import {delay, map} from 'rxjs/operators';

const setTokenEpic: Epic = (action$) =>
  action$.pipe(
    ofType<ASetServerUrl>(SET_SERVER_URL),
    delay<ASetServerUrl>(1000),
    map<ASetServerUrl, ASetToken>(({url}) => ({
      type: SET_TOKEN,
      token: url.toUpperCase(),
    })),
  );

export default combineEpics(setTokenEpic);
