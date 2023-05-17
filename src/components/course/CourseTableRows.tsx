/** @format */

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
              <Buttons
                labelText={"Edit"}
                handleOnClick={() => {
                  handleOnEditClick(course);
                }}
              />
            </StyledTableCell>
          </StyledTableRow>
        ))
        ?.reverse()}
    </React.Fragment>
  );
};

export default CourseTableRows;
