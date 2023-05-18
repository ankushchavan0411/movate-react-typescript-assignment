/** @format */

import {
  ADD_TEACHER,
  DELETE_TEACHER,
  EDIT_TEACHER,
  LOADER_START,
  LOADER_STOP,
} from "../../const/actionTypes";
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

export function deleteTeacher(teacher: ITeacher) {
  return (dispatch: DispatchTypeTeacher) => {
    dispatch({ type: LOADER_START, teacher });
    setTimeout(() => {
      try {
        dispatch({
          type: DELETE_TEACHER,
          teacher,
        });
        dispatch({ type: LOADER_STOP, teacher });
      } catch (error) {
        dispatch({ type: LOADER_STOP, teacher });
        console.error(error);
      }
    }, 700);
  };
}
