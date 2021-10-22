import { AnyAction } from "redux";

import { ACTIONS } from "../constants";

interface IWeather {
  feels_like: number | string;
  temp: number | string;
  type: string;
  icon: string;
}

export interface IWeatherState {
  weather: IWeather[];
}

const defaultState: IWeatherState = {
  weather: [
    { feels_like: "Loading...", temp: "Loading...", type: "Loading...", icon: "Loading..." },
    { feels_like: "Loading...", temp: "Loading...", type: "Loading...", icon: "Loading..." },
  ],
};

export const weatherReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.GET_WEATHER_SUCCESS: {
      return { ...state, weather: action.weather };
    }
    default:
      return state;
  }
};
