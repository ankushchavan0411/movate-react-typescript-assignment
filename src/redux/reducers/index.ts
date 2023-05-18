/** @format */

import { combineReducers } from "redux";
import AlertsReducer from "./alert";
import CourseReducer from "./course";
import LoaderReducer from "./loader";
import StudentReducer from "./student";
import TeacherReducer from "./teacher";

const RootReducer = combineReducers({
  courses: CourseReducer,
  teachers: TeacherReducer,
  students: StudentReducer,
  alert: AlertsReducer,
  loader: LoaderReducer,
});

export default RootReducer;
