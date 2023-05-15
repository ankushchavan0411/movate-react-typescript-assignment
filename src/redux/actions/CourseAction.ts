/** @format */

import { ADD_COURSE, EDIT_COURSE } from "../../const/actionTypes";
import { CourseAction, DispatchType, ICourse } from "../../const/types";

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
