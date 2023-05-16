/** @format */

import { ADD_COURSE, EDIT_COURSE } from "../../const/actionTypes";
import { CourseAction, CourseState, ICourse } from "../../types/types";

const initialState: CourseState = {
  courses: [
    { id: "22sfsd1", name: "Full Stack Development", durationInMonths: 18 },
    { id: "sdfsd2", name: "Front End Development", durationInMonths: 9 },
    { id: "jlksf3", name: "Backend with Java", durationInMonths: 12 },
    { id: "sdsd4", name: "UI/UX Development", durationInMonths: 6 },
    { id: "sdsds5", name: "Blockchain Development", durationInMonths: 6 },
    {
      id: "sfsdfsdfds6",
      name: "Data Science with Python",
      durationInMonths: 24,
    },
  ],
};

/**
 * @ankushchavan0411
 * @description This is the Course Reducer
 * @param state
 * @param action
 * @returns
 */
const CourseReducer = (
  state: CourseState = initialState,
  action: CourseAction
): CourseState => {
  switch (action.type) {
    case ADD_COURSE:
      // const newCourse: ICourse = {
      //   id: action.course.id,
      //   name: action.course.name,
      //   durationInMonths: action.course.durationInMonths,
      // };
      return {
        ...state,
        courses: state.courses.concat(action.course),
      };

    case EDIT_COURSE:
      const updatedCourses: ICourse[] = state.courses.filter((course) => {
        if (course.id === action.course.id) {
          return {
            ...course,
            name: action.course.name,
            durationInMonths: action.course.durationInMonths,
          };
        }
        return course;
      });
      return {
        ...state,
        courses: updatedCourses,
      };
  }
  return state;
};

export default CourseReducer;
