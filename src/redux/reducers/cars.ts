import { AnyAction } from "redux";
import cars from "../mock/cars.json";

export interface IImage {
  id: number;
  src: string;
}

export interface ICar {
  id: number;
  season: string;
  coast: number;
  brand: string;
  model: string;
  desciption: string;
  engine: string;
  hp: string;
  name: string;
  tel: string;
  place: string;
  img: IImage[];
}

export interface ICarsState {
  cars: ICar[];
}

const defaultState: ICarsState = {
  cars: cars,
};

export const carsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
