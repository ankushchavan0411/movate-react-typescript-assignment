/** @format */
import React from "react";
import DataTable from "../common/DataTable";
const Course = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Course Name", width: 500 },
    { field: "durationInMonths", headerName: "Course Duration", width: 300 },
    { field: "action", headerName: "Action", width: 300 },
  ];

  const rows = [
    { id: 1, name: "Jon", durationInMonths: 35 },
    { id: 2, name: "Cersei", durationInMonths: 42 },
    { id: 3, name: "Jaime", durationInMonths: 45 },
    { id: 4, name: "Arya", durationInMonths: 16 },
    {
      id: 5,
      name: "Daenerys",
      durationInMonths: 22,
    },
  ];
  return (
    <React.Fragment>
      <h1>Course</h1>
      <DataTable columns={columns} rows={rows} />
    </React.Fragment>
  );
};
export default Course;
