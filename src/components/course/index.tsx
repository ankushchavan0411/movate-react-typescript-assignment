/** @format */
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import DataModal from "../common/DataModal";
import DataTable from "../common/DataTable";
import MainHeader from "../common/MainHeader";
import AddEditCourse from "./AddEditCourse";

const Course = () => {
  const { courses } = useSelector((state: AppState) => state.courses);
  const [isOpen, setOpen] = React.useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Course Name", width: 500 },
    { field: "durationInMonths", headerName: "Course Duration", width: 300 },
    { field: "action", headerName: "Action", width: 300 },
  ];

  return (
    <React.Fragment>
      <DataModal setOpen={setOpen} isOpen={isOpen} modalTitle={"Add Course"}>
        <AddEditCourse setOpen={setOpen} />
      </DataModal>
      <MainHeader handleOnClick={() => setOpen(true)} labelText="COURSES" />
      <DataTable columns={columns} rows={courses} />
    </React.Fragment>
  );
};
export default Course;
