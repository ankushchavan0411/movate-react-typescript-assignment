/** @format */

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import React from "react";
import { ITeacher } from "../../types/types";
import Buttons from "../common/Button";
import { StyledTableCell, StyledTableRow } from "../../const/style";

type RowItemProps = {
  teacher: ITeacher;
  index: number;
  handleOnEditClick: (teacher: ITeacher) => void;
  setOpen: (isOpen: boolean) => void;
  setTeacherItem: (teacherItem: ITeacher) => void;
};
const TeacherRowItem: React.FC<RowItemProps> = ({
  teacher,
  index,
  handleOnEditClick,
  setOpen,
  setTeacherItem,
}) => {
  return (
    <StyledTableRow>
      <StyledTableCell>{index + 1}</StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {teacher.name}
      </StyledTableCell>
      <StyledTableCell>{teacher.age}</StyledTableCell>
      <StyledTableCell>{teacher.college}</StyledTableCell>
      <StyledTableCell>{teacher.subject}</StyledTableCell>

      <StyledTableCell align="right">
        <Stack spacing={2} direction="row">
          <Buttons
            color="warning"
            startIcon={<EditIcon />}
            labelText={"Edit"}
            handleOnClick={() => {
              handleOnEditClick(teacher);
            }}
          />
          <Buttons
            startIcon={<DeleteIcon />}
            color="error"
            labelText={"Delete"}
            handleOnClick={() => {
              setOpen(true);
              setTeacherItem(teacher);
            }}
          />
        </Stack>
      </StyledTableCell>
    </StyledTableRow>
  );
};
export default TeacherRowItem;
