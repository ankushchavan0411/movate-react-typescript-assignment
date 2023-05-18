/** @format */

import {
  ADD_STUDENT,
  DELETE_STUDENT,
  EDIT_STUDENT,
  LOADER_START,
  LOADER_STOP,
} from "../../const/actionTypes";
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

export function deleteStudent(student: IStudent) {
  return (dispatch: DispatchTypeStudent) => {
    dispatch({ type: LOADER_START, student });
    setTimeout(() => {
      try {
        dispatch({
          type: DELETE_STUDENT,
          student,
        });
        dispatch({ type: LOADER_STOP, student });
      } catch (error) {
        dispatch({ type: LOADER_STOP, student });
        console.error(error);
      }
    }, 700);
  };
}
