/** @format */

import { ADD_TEACHER, EDIT_TEACHER } from "../../const/actionTypes";
import { ITeacher, TeacherAction, TeacherState } from "../../types/types";

const initialState: TeacherState = {
  teachers: [
    {
      id: "sfs2dssd1",
      name: "Dr. Amol Shinde",
      age: 35,
      subject: "Computer Science",
      college: "MGM College",
    },
  ],
};

/**
 * @ankushchavan0411
 * @description This is the Teacher Reducer
 * @param state
 * @param action
 * @returns
 */
const TeacherReducer = (
  state: TeacherState = initialState,
  action: TeacherAction
): TeacherState => {
  switch (action.type) {
    case ADD_TEACHER:
      return {
        ...state,
        teachers: state.teachers.concat(action.teacher),
      };

    case EDIT_TEACHER:
      const updatedTeacher: ITeacher[] = state.teachers.filter((teacher) => {
        if (teacher.id === action.teacher.id) {
          teacher.name = action.teacher.name;
          teacher.age = action.teacher.age;
          teacher.subject = action.teacher.subject;
          teacher.college = action.teacher.college;
          return teacher;
        } else {
          return teacher;
        }
      });
      return {
        ...state,
        teachers: updatedTeacher,
      };
  }
  return state;
};

export default TeacherReducer;
