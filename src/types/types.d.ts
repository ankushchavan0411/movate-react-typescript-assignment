/** @format */

/**
 * @ankushchavan0411
 * @description Define Courses types here
 */
export interface ICourse {
  id: string;
  name: string;
  durationInMonths: any;
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
export interface ITeacher {
  id: string;
  name: string;
  age: any;
  subject: string;
  college: string;
}

export type TeacherState = {
  teachers: ITeacher[];
};

export type TeacherAction = {
  type: string;
  teacher: ITeacher;
};

export type DispatchTypeTeacher = (args: TeacherAction) => TeacherAction;

/**
 * @ankushchavan0411
 * @description Define Students types here
 */
export interface IStudent {
  id: string;
  name: string;
  age: any;
  grades: string;
  college: string;
  city: string;
}

export type StudentState = {
  students: IStudent[];
};

export type StudentAction = {
  type: string;
  student: IStudent;
};

export type DispatchTypeStudent = (args: StudentAction) => StudentAction;

/**
 * @ankushchavan0411
 * @description Define Alerts types here
 */
export interface IAlerts {
  type: any;
  text: string;
}

export type AlertsState = {
  alert: IAlerts;
};

export type AlertsAction = {
  type: string;
  alert: IAlerts;
};

export type DispatchTypeAlertsMessage = (args: AlertsAction) => AlertsAction;

/**
 * @ankushchavan0411
 * @description Define Loader types here
 */

export interface ILoader {
  loading: boolean;
}

export type LoaderState = {
  loading: boolean;
};

export type LoaderAction = {
  type: string;
};
export type DispatchTypeLoader = (
  args: AlertLoaderActionsAction
) => LoaderAction;
