/** @format */
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../components/common/PageNotFound";
import Course from "../components/course";
import Student from "../components/student";
import Teacher from "../components/teacher";
import { ROUTES } from "../const";

const Pages = () => {
  const { COURSE, TEACHER, STUDENT } = ROUTES;
  return (
    <Routes>
      <Route path="/" element={<Course />} />
      <Route path={COURSE} element={<Course />} />
      <Route path={TEACHER} element={<Teacher />} />
      <Route path={STUDENT} element={<Student />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Pages;
