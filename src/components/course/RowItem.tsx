/** @format */

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import React from "react";
import { ICourse } from "../../types/types";
import Buttons from "../common/Button";
import { StyledTableCell, StyledTableRow } from "../common/style";

type RowItemProps = {
  course: ICourse;
  index: number;
  handleOnEditClick: (course: ICourse) => void;
  setOpen: (isOpen: boolean) => void;
  setCourseItem: (courseItem: ICourse) => void;
};
const RowItem: React.FC<RowItemProps> = ({
  course,
  index,
  handleOnEditClick,
  setOpen,
  setCourseItem,
}) => {
  return (
    <StyledTableRow>
      <StyledTableCell>{index + 1}</StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {course.name}
      </StyledTableCell>
      <StyledTableCell>{course.durationInMonths}</StyledTableCell>
      <StyledTableCell align="right">
        <Stack spacing={2} direction="row">
          <Buttons
            startIcon={<EditIcon />}
            labelText={"Edit"}
            handleOnClick={() => {
              handleOnEditClick(course);
            }}
          />
          <Buttons
            startIcon={<DeleteIcon />}
            color="error"
            labelText={"Delete"}
            handleOnClick={() => {
              setOpen(true);
              setCourseItem(course);
            }}
          />
        </Stack>
      </StyledTableCell>
    </StyledTableRow>
  );
};
export default RowItem;
