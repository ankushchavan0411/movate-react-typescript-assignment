/** @format */

import { ADD_TEACHER, EDIT_TEACHER } from "../../const/actionTypes";
import {
  DispatchTypeTeacher,
  ITeacher,
  TeacherAction,
} from "../../types/types";

export function addTeacher(teacher: ITeacher) {
  const action: TeacherAction = {
    type: ADD_TEACHER,
    teacher,
  };

  return (dispatch: DispatchTypeTeacher) => {
    dispatch(action);
  };
}

export function editTeacher(teacher: ITeacher) {
  const action: TeacherAction = {
    type: EDIT_TEACHER,
    teacher,
  };

  return (dispatch: DispatchTypeTeacher) => {
    dispatch(action);
  };
}
