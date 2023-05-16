/** @format */

import { combineReducers } from "redux";
import CourseReducer from "./course";
import TeacherReducer from "./teacher";
import StudentReducer from "./student";

const RootReducer = combineReducers({
  courses: CourseReducer,
  teachers: TeacherReducer,
  students: StudentReducer,
});

export default RootReducer;
