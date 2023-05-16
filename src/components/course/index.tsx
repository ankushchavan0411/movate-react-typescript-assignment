/** @format */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import DataModal from "../common/DataModal";
import DataTable from "../common/DataTable";
import MainHeader from "../common/MainHeader";
import AddEditCourse from "./AddEditCourse";

const Course = () => {
  const { courses } = useSelector((state: AppState) => state.courses);
  const [isOpen, setOpen] = React.useState(false);
  const [course, setCourse] = useState({});
  const [isEdit, setEdit] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Course Name", width: 500 },
    { field: "durationInMonths", headerName: "Course Duration", width: 300 },
    { field: "action", headerName: "Action", width: 300 },
  ];

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
        labelText="COURSES"
      />
      <DataTable
        columns={columns}
        rows={courses}
        handleOnEditClick={(course: any): void => {
          setCourse(course);
          setOpen(true);
          setEdit(true);
        }}
      />
    </React.Fragment>
  );
};
export default Course;
