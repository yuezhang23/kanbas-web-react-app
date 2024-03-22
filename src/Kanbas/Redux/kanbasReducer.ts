import { createSlice } from "@reduxjs/toolkit";
import db from "../Database/Database"


const initialCourseState = {
    items : db.courses,
    item : {
        _id: "-1", 
        name: "New Course", 
        number: "New Number",
        startDate: "2023-09-10", 
        endDate: "2023-12-15",
        text: "Introduction to",
        image: "Data-Analytics.png"
    },
};

const initialModuleState = {
    items: db.modules,
    item: 
     {
        _id: "-1",
        name: "New Module",
        description: "New Description",
        course: "New Course",
        lessons: [
            {
                _id: "-1",
                lname: "New Lesson",
                description: [ "New Content"],
            }]
     }
};

const initialAssignmentState= {
    items: db.assignments,
    item : 
    {
        name: "New Assigment",
        _id: "New",
        catalog: [
          { _id: "-1", 
           title: "New Title", 
           course: "course id",
           description: "New Assignment Description" },]
        },
}


const addItem = (state: any, action: any) => {
    const newComp = { ...action.payload, _id: new Date().getTime().toString() };
    state.items.push(newComp);
};

const updateCourseItem = (state :any, action :any) => {
    state.items = state.items.map((item :any) => item._id === action.payload._id ? action.payload: item);
    state.item = initialCourseState.item;
};

const updateModuleItem = (state :any, action :any) => {
    state.items = state.items.map((item :any) => item._id === action.payload._id ? action.payload: item);
    state.item = initialModuleState.item;
};

const updateModuleSingleItem = (state :any, action :any) => {
    // review
    // state.item = {...state.items.filter((item :any) => item._id === action.payload._id)[0]};
    state.item.name = action.payload.name;
    state.item.description = action.payload.description;
    state.item.lessons = state.item.lessons.map((term: any) => term._id === action.payload.lessons[0]._id ? action.payload.lessons[0]: term);
};

const updateAssignmentSingleItem = (state :any, action :any) => {
    const oriItem = state.items.filter((item :any) => item._id === action.payload._id)[0];
    oriItem.catalog = oriItem.catalog.map((term: any) => term._id === action.payload.catalog[0]._id ? action.payload.catalog[0]: term);
    state.items = state.items.map((item :any) => item._id === oriItem._id ? oriItem: item);
    state.item = initialAssignmentState.item;
};

const updateAssignmentItem = (state :any, action :any) => {
    state.items = state.items.map((item :any) => item._id === action.payload._id ? action.payload: item);
    state.item = initialAssignmentState.item;
};


const deleteItem = (state :any, action :any) => {
    state.items = state.items.filter((item: any)=> item._id !== action.payload);
};

const setItem = (state :any, action :any) => {
    state.item = action.payload;
};


const courseSlice =  createSlice({
    name: "course",
    initialState : initialCourseState,
    reducers : {
        addCourse: addItem,
        updateCourse: updateCourseItem,
        deleteCourse: deleteItem,
        setCourse: setItem
    }
});
export const {addCourse, updateCourse, deleteCourse, setCourse} = courseSlice.actions;
export const courseReducer =  courseSlice.reducer;


const moduleSlice =  createSlice({
    name: "module",
    initialState : initialModuleState,
    reducers : {
        addModule: addItem,
        updateModule: updateModuleItem,
        updateModuleSingle: updateModuleSingleItem,
        deleteModule: deleteItem,
        setModule: setItem
    }
});
export const {addModule, updateModule, updateModuleSingle, deleteModule, setModule} = moduleSlice.actions;
export const moduleReducer =  moduleSlice.reducer;


const assignmemtSlice =  createSlice({
    name: "assignment",
    initialState : initialAssignmentState,
    reducers : {
        addAssignment: addItem,
        updateAssignment: updateAssignmentSingleItem,
        updateAssignmentList: updateAssignmentItem,
        deleteAssignment: deleteItem,
        setAssignment: setItem
    }
});
export const {addAssignment, updateAssignment, updateAssignmentList, deleteAssignment, setAssignment} = assignmemtSlice.actions;
export const assignmentReducer =  assignmemtSlice.reducer;

