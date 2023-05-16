/** @format */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { COURSE_TABLE_COLS } from "../../const";
import { AppState } from "../../redux/store";
import DataModal from "../common/DataModal";
import DataTable from "../common/DataTable";
import MainHeader from "../common/MainHeader";
import AddEditCourse from "./AddEditCourse";
import CourseTableRows from "./CourseTableRows";

const Course = () => {
  const { courses } = useSelector((state: AppState) => state.courses);
  const [isOpen, setOpen] = React.useState(false);
  const [course, setCourse] = useState({});
  const [isEdit, setEdit] = useState(false);

  return (
    <React.Fragment>
      <DataModal
        setOpen={setOpen}
        isOpen={isOpen}
        modalTitle={`${isEdit ? "Edit" : "Add"} Course`}
      >
        <AddEditCourse setOpen={setOpen} course={course} isEdit={isEdit} />
      </DataModal>
      <MainHeader
        handleOnClick={() => {
          setOpen(true);
          setCourse({});
          setEdit(false);
        }}
        labelText="COURSE"
      />
      <DataTable
        columns={COURSE_TABLE_COLS}
        render={
          <CourseTableRows
            handleOnEditClick={(course: any): void => {
              setCourse(course);
              setOpen(true);
              setEdit(true);
            }}
            courses={courses}
          />
        }
      />
    </React.Fragment>
  );
};
export default Course;
