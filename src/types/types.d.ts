/** @format */

/**
 * @ankushchavan0411
 * @description Define Courses types here
 */
export interface ICourse {
  id: string;
  name: string;
  durationInMonths: number;
}

export type CourseState = {
  courses: ICourse[];
};

export type CourseAction = {
  type: string;
  course: ICourse;
};

export type DispatchType = (args: CourseAction) => CourseAction;

/**
 * @ankushchavan0411
 * @description Define Teachers types here
 */
