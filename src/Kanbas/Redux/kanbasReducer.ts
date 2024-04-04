import { createSlice } from "@reduxjs/toolkit";
// import db from "../Database/Database"

const initialState = {
    items : [],
    item :  {},
};

const setItems =(state:any, action:any) =>{
    state.items = action.payload;
};

const addItem = (state: any, action: any) => {
    state.items.push(action.payload);
};

const updateItem = (state :any, action :any) => {
    state.items = state.items.map((item :any) => item._id === action.payload._id ? action.payload: item);
};

const deleteItem = (state :any, action :any) => {
    state.items = state.items.filter((item: any)=> item._id !== action.payload);
};

const setItem = (state :any, action :any) => {
    state.item = action.payload;
};


const courseSlice =  createSlice({
    name: "course",
    initialState : initialState,
    reducers : {
        addCourse: addItem,
        updateCourse: updateItem,
        deleteCourse: deleteItem,
        setCourse: setItem,
        setCourses: setItems
    }
});
export const {addCourse, updateCourse, deleteCourse, setCourse, setCourses} = courseSlice.actions;
export const courseReducer =  courseSlice.reducer;


const moduleSlice =  createSlice({
    name: "module",
    initialState : initialState,
    reducers : {
        addModule: addItem,
        updateModule: updateItem,
        deleteModule: deleteItem,
        setModule: setItem,
        setModules: setItems,
    }
});
export const {addModule, updateModule,deleteModule, setModule, setModules} = moduleSlice.actions;
export const moduleReducer =  moduleSlice.reducer;

const assignmemtSlice =  createSlice({
    name: "assignment",
    initialState : initialState,
    reducers : {
        addAssignment: addItem,
        updateAssignment: updateItem,
        deleteAssignment: deleteItem,
        setAssignment: setItem,
        setAssignments: setItems,

    }
});
export const {addAssignment, updateAssignment,deleteAssignment,setAssignment, setAssignments} = assignmemtSlice.actions;
export const assignmentReducer =  assignmemtSlice.reducer;

