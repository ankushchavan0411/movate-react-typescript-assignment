/** @format */

import { ADD_STUDENT, EDIT_STUDENT } from "../../const/actionTypes";
import { IStudent, StudentAction, StudentState } from "../../types/types";

const initialState: StudentState = {
  students: [
    {
      id: "ses3dssd2",
      name: "Aishwarya Ingole",
      age: 23,
      grades: "A+",
      college: "GICA College",
      city: "Aurangabad",
    },
    {
      id: "sfs5dssd5",
      name: "Rahul Vanarse",
      age: 30,
      grades: "B+",
      college: "Vasantrao Naik College",
      city: "Aurangabad",
    },
    {
      id: "lfk3dssd3",
      name: "Yogita Kadam",
      age: 24,
      grades: "A++",
      college: "Yashwant College",
      city: "Nanded",
    },
    {
      id: "jhfh4dssd4",
      name: "Vijay Dhangar",
      age: 29,
      grades: "O",
      college: "Vasantrao Naik College",
      city: "Aurangabad",
    },
    {
      id: "sfs2dssd1",
      name: "Priti More",
      age: 23,
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
