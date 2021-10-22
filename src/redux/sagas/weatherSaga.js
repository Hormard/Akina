import { takeEvery, call, put } from "redux-saga/effects";

import { getWeather } from "../../services/weather";
import { ACTIONS } from "../constants";

function* getweatherSaga() {
  try {
    const weather = yield call(() => getWeather());

    yield put({ type: ACTIONS.GET_WEATHER_SUCCESS, weather });
  } catch {}
}

export function* weatherWatcher() {
  yield takeEvery(ACTIONS.GET_WEATHER, getweatherSaga);
}
