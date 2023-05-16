/** @format */

import { combineReducers } from "redux";
import CourseReducer from "./course";
import TeacherReducer from "./teacher";
const RootReducer = combineReducers({
  courses: CourseReducer,
  teachers: TeacherReducer,
});

export default RootReducer;
