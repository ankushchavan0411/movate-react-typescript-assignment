/** @format */

import { ADD_STUDENT, EDIT_STUDENT } from "../../const/actionTypes";
import {
  DispatchTypeStudent,
  IStudent,
  StudentAction,
} from "../../types/types";

export function addStudent(student: IStudent) {
  const action: StudentAction = {
    type: ADD_STUDENT,
    student,
  };

  return (dispatch: DispatchTypeStudent) => {
    dispatch(action);
  };
}

export function editStudent(student: IStudent) {
  const action: StudentAction = {
    type: EDIT_STUDENT,
    student,
  };

  return (dispatch: DispatchTypeStudent) => {
    dispatch(action);
  };
}
