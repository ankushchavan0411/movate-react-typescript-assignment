/** @format */

import { combineReducers } from "redux";
import CourseReducer from "./course";
const RootReducer = combineReducers({
  courses: CourseReducer,
});

export default RootReducer;
