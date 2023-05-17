/** @format */

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import React from "react";
import { ICourse } from "../../types/types";
import Buttons from "../common/Button";
import { StyledTableCell, StyledTableRow } from "../common/style";

interface Props {
  handleOnEditClick: (course: ICourse) => void;
  courses: ICourse[];
}

const CourseTableRows: React.FC<Props> = ({ handleOnEditClick, courses }) => {
  return (
    <React.Fragment>
      {courses
        ?.map?.((course, index) => (
          <StyledTableRow key={course.id}>
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
                    handleOnEditClick(course);
                  }}
                />
              </Stack>
            </StyledTableCell>
          </StyledTableRow>
        ))
        ?.reverse()}
    </React.Fragment>
  );
};

export default CourseTableRows;
