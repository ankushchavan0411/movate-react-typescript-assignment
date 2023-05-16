/** @format */

import { ADD_STUDENT, EDIT_STUDENT } from "../../const/actionTypes";
import { IStudent, StudentAction, StudentState } from "../../types/types";

const initialState: StudentState = {
  students: [
    {
      id: "sfs2dssd1",
      name: "Priti More",
      age: 25,
      grades: "A++",
      college: "MGM College",
      city: "Pune",
    },
  ],
};

/**
 * @ankushchavan0411
 * @description This is the Stuent Reducer
 * @param state
 * @param action
 * @returns
 */
const StudentReducer = (
  state: StudentState = initialState,
  action: StudentAction
): StudentState => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: state.students.concat(action.student),
      };

    case EDIT_STUDENT:
      const updatedTeacher: IStudent[] = state.students.filter((student) => {
        if (student.id === action.student.id) {
          student.name = action.student.name;
          student.age = action.student.age;
          student.grades = action.student.grades;
          student.college = action.student.college;
          student.city = action.student.city;
          return student;
        } else {
          return student;
        }
      });
      return {
        ...state,
        students: updatedTeacher,
      };
  }
  return state;
};

export default StudentReducer;
