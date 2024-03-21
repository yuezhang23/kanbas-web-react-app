import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../a4/ReduxExamples/CounterRedux/CounterReducer";
import addReducer from "../a4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../a4/ReduxExamples/todos/todoReducer";


export type TodoType = {
  id: string;
  title: string;
};



export interface LabState {
  helloReducer: { message: string; };
  counterReducer: { count: number; };
  addReducer: {
    sum: number;
  };
  todosReducer: {
    // list of objects
    todos: TodoType[];
    todo: TodoType;
  };
 

}

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;