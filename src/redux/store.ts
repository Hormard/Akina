import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { carsReducer, ICarsState } from "./reducers/cars";
import { eventsReducer, IEventState } from "./reducers/events";
import { IImagesState, imagesReducer } from "./reducers/images";

import { IWeatherState, weatherReducer } from "./reducers/weather";
import { weatherWatcher } from "./sagas/weatherSaga";

export interface IState {
  weather: IWeatherState;
  cars: ICarsState;
  images: IImagesState;
  events: IEventState;
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({
    weather: weatherReducer,
    cars: carsReducer,
    images: imagesReducer,
    events: eventsReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(weatherWatcher);
