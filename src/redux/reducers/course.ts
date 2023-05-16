/** @format */

import { ADD_COURSE, EDIT_COURSE } from "../../const/actionTypes";
import { CourseAction, CourseState, ICourse } from "../../const/types";

const initialState: CourseState = {
  courses: [
    { id: 1, name: "Full Stack Development", durationInMonths: 18 },
    { id: 2, name: "Front End Development", durationInMonths: 9 },
    { id: 3, name: "Backend with Java", durationInMonths: 12 },
    { id: 4, name: "UI/UX Development", durationInMonths: 6 },
    { id: 5, name: "Blockchain Development", durationInMonths: 6 },
    {
      id: 6,
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
      const newCourse: ICourse = {
        id: Math.random(),
        name: action.course.name,
        durationInMonths: action.course.durationInMonths,
      };
      return {
        ...state,
        courses: state.courses.concat(newCourse),
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
