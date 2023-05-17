/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TEACHER_TABLE_COLS } from "../../const";
import { AppState } from "../../redux/store";
import { ITeacher } from "../../types/types";
import DataModal from "../common/DataModal";
import DataTable from "../common/DataTable";
import MainHeader from "../common/MainHeader";
import AddEditTeacher from "./AddEditTeacher";
import TeacherTableRows from "./TeacherTableRows";

const Teacher = () => {
  const { teachers } = useSelector((state: AppState) => state.teachers);
  const [isOpen, setOpen] = React.useState(false);
  const [teacher, setTeacher] = useState({} as ITeacher);
  const [isEdit, setEdit] = useState(false);

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
          setTeacher({} as ITeacher);
          setEdit(false);
        }}
        labelText="TEACHER"
      />
      <DataTable
        columns={TEACHER_TABLE_COLS}
        render={
          <TeacherTableRows
            handleOnEditClick={(teacher) => {
              setTeacher(teacher);
              setOpen(true);
              setEdit(true);
            }}
            teachers={teachers}
          />
        }
      />
    </React.Fragment>
  );
};
export default Teacher;
