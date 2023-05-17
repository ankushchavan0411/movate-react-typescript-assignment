/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { STUDENT_TABLE_COLS } from "../../const";
import { AppState } from "../../redux/store";
import { IStudent } from "../../types/types";
import DataModal from "../common/DataModal";
import DataTable from "../common/DataTable";
import MainHeader from "../common/MainHeader";
import AddEditStudent from "./AddEditStudent";
import StudentTableRows from "./StudentTableRows";

const Student = () => {
  const { students } = useSelector((state: AppState) => state.students);
  const [isOpen, setOpen] = React.useState(false);
  const [student, setStudent] = useState({} as IStudent);
  const [isEdit, setEdit] = useState(false);

  return (
    <React.Fragment>
      <DataModal
        setOpen={setOpen}
        isOpen={isOpen}
        modalTitle={`${isEdit ? "Edit" : "Add"} Student`}
      >
        <AddEditStudent setOpen={setOpen} student={student} isEdit={isEdit} />
      </DataModal>
      <MainHeader
        handleOnClick={() => {
          setOpen(true);
          setStudent({} as IStudent);
          setEdit(false);
        }}
        labelText="STUDENT"
      />
      <DataTable
        columns={STUDENT_TABLE_COLS}
        render={
          <StudentTableRows
            handleOnEditClick={(student: any): void => {
              setStudent(student);
              setOpen(true);
              setEdit(true);
            }}
            students={students}
          />
        }
      />
    </React.Fragment>
  );
};
export default Student;
