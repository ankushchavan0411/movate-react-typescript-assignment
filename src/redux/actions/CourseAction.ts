/** @format */

import {
  ADD_COURSE,
  DELETE_COURSE,
  EDIT_COURSE,
  LOADER_START,
  LOADER_STOP,
} from "../../const/actionTypes";
import { CourseAction, DispatchType, ICourse } from "../../types/types";

export function addCourse(course: ICourse) {
  const action: CourseAction = {
    type: ADD_COURSE,
    course,
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function editCourse(course: ICourse) {
  const action: CourseAction = {
    type: EDIT_COURSE,
    course,
  };

  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function deleteCourse(course: ICourse) {
  const action: CourseAction = {
    type: DELETE_COURSE,
    course,
  };

  return (dispatch: DispatchType) => {
    dispatch({ type: LOADER_START, course });
    setTimeout(() => {
      try {
        dispatch(action);
        dispatch({ type: LOADER_STOP, course });
      } catch (error) {
        dispatch({ type: LOADER_STOP, course });
        console.error(error);
      }
    }, 700);
  };
}
