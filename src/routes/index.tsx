/** @format */
import { Route, Routes } from "react-router-dom";
import Teacher from "../components/Teacher";
import Course from "../components/course";
import { ROUTES } from "../const";

const Pages = () => {
  const { COURSE, TEACHER, STUDENT } = ROUTES;
  return (
    <Routes>
      <Route path="/" element={<Course />} />
      <Route path={COURSE} element={<Course />} />
      <Route path={TEACHER} element={<Teacher />} />
      <Route path={STUDENT} element={<Teacher />} />
      <Route path="*" element={<p>Sorry, page not found</p>} />
    </Routes>
  );
};

export default Pages;
