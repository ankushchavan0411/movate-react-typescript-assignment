/** @format */

import { combineReducers } from "redux";
import AlertsReducer from "./alert";
import CourseReducer from "./course";
import StudentReducer from "./student";
import TeacherReducer from "./teacher";

const RootReducer = combineReducers({
  courses: CourseReducer,
  teachers: TeacherReducer,
  students: StudentReducer,
  alert: AlertsReducer,
});

export default RootReducer;
