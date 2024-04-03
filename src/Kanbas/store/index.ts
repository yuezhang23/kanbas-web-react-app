import { configureStore } from "@reduxjs/toolkit";
import {courseReducer,  assignmentReducer, moduleReducer} from "../Redux/kanbasReducer";


export interface KanbasState {
  courseReducer: {
    items : any[];
    item : any;
  }
  moduleReducer: {
    items: any[];
    item: any;
  };
  assignmentReducer: {
    items: any[];
    item : any;
  }
}

const store = configureStore({
  reducer: {
    moduleReducer,
    courseReducer,
    assignmentReducer
  }
});

export default store;