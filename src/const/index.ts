/** @format */

export const BRAND_NAME = "Myapp";

export const ROUTES = {
  HOME: "home",
  COURSE: "course",
  STUDENT: "student",
  TEACHER: "teacher",
};

export const COURSE_TABLE_COLS = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Course Name", width: 500 },
  { field: "durationInMonths", headerName: "Course Duration", width: 300 },
  { field: "action", headerName: "Action", width: 300 },
];

export const TEACHER_TABLE_COLS = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "age", headerName: "Age", width: 100 },
  { field: "subject", headerName: "Subject", width: 200 },
  { field: "college", headerName: "College", width: 200 },
  { field: "action", headerName: "Action", width: 200 },
];

export const STUDENT_TABLE_COLS = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "age", headerName: "Age", width: 100 },
  { field: "grade", headerName: "Grade", width: 200 },
  { field: "college", headerName: "College", width: 200 },
  { field: "city", headerName: "City", width: 200 },
  { field: "action", headerName: "Action", width: 200 },
];

export const ALERT_TYPES = {
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
  SUCCESS: "success",
};

export const ADD_MESSAGE_TEXT = "added successfully..!";
export const UPDATE_MESSAGE_TEXT = "data updated succesfully..!";
export const DELETE_MESSAGE_TEXT = "deleted succesfully..!";
export const ARE_YOU_SURE = "Are You Sure?";
export const IF_SO = "If so, please click Confirm, or else Cancel CTA.";
export const DO_YOU_WISH = " Do you wish to remove the";
