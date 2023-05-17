/** @format */
import React from "react";
import { ROUTES } from "../const";

const Course = React.lazy(() => import("../components/course"));
const Teacher = React.lazy(() => import("../components/teacher"));
const Student = React.lazy(() => import("../components/student"));

const { COURSE, TEACHER, STUDENT } = ROUTES;

const RoutesList = [
  {
    path: "/",
    Component: Course,
  },
  {
    path: COURSE,
    Component: Course,
  },
  {
    path: TEACHER,
    Component: Teacher,
  },
  {
    path: STUDENT,
    Component: Student,
  },
];

export default RoutesList;
