/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import DataModal from "../common/DataModal";
import DataTable from "../common/DataTable";
import MainHeader from "../common/MainHeader";
import AddEditTeacher from "./AddEditTeacher";

const Teacher = () => {
  const { courses } = useSelector((state: AppState) => state.courses);
  const [isOpen, setOpen] = React.useState(false);
  const [teacher, setTeacher] = useState({});
  const [isEdit, setEdit] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "subject", headerName: "Subject", width: 200 },
    { field: "college", headerName: "College", width: 200 },
    { field: "action", headerName: "Action", width: 200 },
  ];

  return (
    <React.Fragment>
      <DataModal
        setOpen={setOpen}
        isOpen={isOpen}
        modalTitle={`${isEdit ? "Edit" : "Add"} Teacher`}
      >
        <AddEditTeacher setOpen={setOpen} teacher={teacher} isEdit={isEdit} />
      </DataModal>
      <MainHeader
        handleOnClick={() => {
          setOpen(true);
          setTeacher({});
          setEdit(false);
        }}
        labelText="TEACHER"
      />
      <DataTable
        columns={columns}
        rows={courses}
        handleOnEditClick={(teacher: any): void => {
          setTeacher(teacher);
          setOpen(true);
          setEdit(true);
        }}
      />
    </React.Fragment>
  );
};
export default Teacher;
