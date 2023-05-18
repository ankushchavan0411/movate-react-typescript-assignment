/** @format */

import {
  ADD_TEACHER,
  DELETE_TEACHER,
  EDIT_TEACHER,
} from "../../const/actionTypes";
import { ITeacher, TeacherAction, TeacherState } from "../../types/types";

const initialState: TeacherState = {
  teachers: [
    {
      id: "sfs1dssd1",
      name: "Dr. Amol Shinde",
      age: 33,
      subject: "Computer Science",
      college: "MGM College",
    },
    {
      id: "err4dssd4",
      name: "Dr. Pooja Patil",
      age: 34,
      subject: "Managment and HR",
      college: "Devgiri College",
    },
    {
      id: "ssd2dssd2",
      name: "Dr. Vishal Shirsat",
      age: 36,
      subject: "Computer Science & IT",
      college: "Dr.BAMU College",
    },
    {
      id: "dsd3dssd3",
      name: "Dr. Prakash Ingale",
      age: 40,
      subject: "Socail Science",
      college: "Peoples College",
    },
    {
      id: "erwww4dssd4",
      name: "Dr. Simran Maniyar",
      age: 29,
      subject: "Commerce and Finance",
      college: "Chattrapati College",
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

    case EDIT_TEACHER: {
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

    case DELETE_TEACHER: {
      return {
        ...state,
        teachers: state.teachers.filter(
          (teacher) => teacher.id !== action.teacher.id
        ),
      };
    }
  }

  return state;
};

export default TeacherReducer;
