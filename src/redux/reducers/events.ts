import { AnyAction } from "redux";
import { ACTIONS } from "../constants";
import events from "../mock/events.json";

export interface IPilot {
  id: number;
  firstName: string;
  lastName: string;
  carBrand: string;
  model: string;
  tel: string;
  email: string;
}

export interface IEvent {
  id: number;
  title: string;
  date: string;
  place: string;
  pilots: IPilot[];
}

export interface IEventState {
  events: IEvent[];
}

const defaultState: IEventState = {
  events: events,
};

export const eventsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.ADD_PILOT: {
      const newEvents = events.map((item) => {
        if (item.id === action.event[0].id) {
          return action.event[0];
        }
        return item;
      });
      console.log(newEvents);

      return { ...state, events: newEvents };
    }
    default:
      return state;
  }
};

// case "addTodo": {
//   const newTodos = [...state.todos, action.todoshka];
//   return { ...state, todos: newTodos, filteredTodos: newTodos };
// }
