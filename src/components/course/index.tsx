/** @format */
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import DataTable from "../common/DataTable";
import MainHeader from "../common/MainHeader";

const Course = () => {
  const { courses } = useSelector((state: AppState) => state.courses);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Course Name", width: 500 },
    { field: "durationInMonths", headerName: "Course Duration", width: 300 },
    { field: "action", headerName: "Action", width: 300 },
  ];

  const handleOnClick = () => {
    console.log("clicked on add new");
  };

  return (
    <React.Fragment>
      <MainHeader handleOnClick={handleOnClick} labelText="COURSES" />
      <DataTable columns={columns} rows={courses} />
    </React.Fragment>
  );
};
export default Course;
