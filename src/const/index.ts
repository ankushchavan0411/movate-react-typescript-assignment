/** @format */
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
