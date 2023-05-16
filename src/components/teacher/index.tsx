/** @format */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { ITeacher } from "../../types/types";
import Buttons from "../common/Button";
import DataModal from "../common/DataModal";
import DataTable from "../common/DataTable";
import MainHeader from "../common/MainHeader";
import { StyledTableCell, StyledTableRow } from "../common/style";
import AddEditTeacher from "./AddEditTeacher";

const Teacher = () => {
  const { teachers } = useSelector((state: AppState) => state.teachers);
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

  interface Props {
    handleOnEditClick(teacher: ITeacher): any;
  }

  const Rows: React.FC<Props> = ({ handleOnEditClick }) => {
    return (
      <React.Fragment>
        {teachers
          ?.map?.((teacher: ITeacher, index: number) => (
            <StyledTableRow key={teacher.id}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {teacher.name}
              </StyledTableCell>
              <StyledTableCell>{teacher.age}</StyledTableCell>
              <StyledTableCell>{teacher.college}</StyledTableCell>
              <StyledTableCell>{teacher.subject}</StyledTableCell>
              <StyledTableCell align="right">
                <Buttons
                  labelText={"Edit"}
                  handleOnClick={() => {
                    handleOnEditClick(teacher);
                  }}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))
          ?.reverse()}
      </React.Fragment>
    );
  };

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
        render={
          <Rows
            handleOnEditClick={(teacher: any): void => {
              setTeacher(teacher);
              setOpen(true);
              setEdit(true);
            }}
          />
        }
      />
    </React.Fragment>
  );
};
export default Teacher;
