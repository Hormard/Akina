import { AnyAction } from "redux";
import images from "../mock/images.json";

export interface IImg {
  id: number;
  type: string;
  src: string;
}

export interface IImagesState {
  images: IImg[];
}

const defaultState: IImagesState = {
  images: images,
};

export const imagesReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
