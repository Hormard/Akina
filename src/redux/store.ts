import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { IWeatherState, weatherReducer } from "./reducers/weather";
import { weatherWatcher } from "./sagas/weatherSaga";

export interface IState {
  weather: IWeatherState;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({ weather: weatherReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(weatherWatcher);
