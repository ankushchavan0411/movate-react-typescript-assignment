/** @format */

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import React from "react";
import { IStudent } from "../../types/types";
import Buttons from "../common/Button";
import { StyledTableCell, StyledTableRow } from "../common/style";

type RowItemProps = {
  student: IStudent;
  index: number;
  handleOnEditClick: (student: IStudent) => void;
  setOpen: (isOpen: boolean) => void;
  setStudentItem: (studentsItem: IStudent) => void;
};
const StudentRowItem: React.FC<RowItemProps> = ({
  student,
  index,
  handleOnEditClick,
  setOpen,
  setStudentItem,
}) => {
  return (
    <StyledTableRow>
      <StyledTableCell>{index + 1}</StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {student.name}
      </StyledTableCell>
      <StyledTableCell>{student.age}</StyledTableCell>
      <StyledTableCell>{student.grades}</StyledTableCell>
      <StyledTableCell>{student.college}</StyledTableCell>
      <StyledTableCell>{student.city}</StyledTableCell>

      <StyledTableCell align="right">
        <Stack spacing={2} direction="row">
          <Buttons
            color="warning"
            startIcon={<EditIcon />}
            labelText={"Edit"}
            handleOnClick={() => {
              handleOnEditClick(student);
            }}
          />
          <Buttons
            startIcon={<DeleteIcon />}
            color="error"
            labelText={"Delete"}
            handleOnClick={() => {
              setOpen(true);
              setStudentItem(student);
            }}
          />
        </Stack>
      </StyledTableCell>
    </StyledTableRow>
  );
};
export default StudentRowItem;
