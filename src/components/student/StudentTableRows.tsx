/** @format */

import React from "react";
import { IStudent } from "../../types/types";
import Buttons from "../common/Button";
import { StyledTableCell, StyledTableRow } from "../common/style";

interface Props {
  handleOnEditClick: (student: IStudent) => void;
  students: IStudent[];
}

const StudentTableRows: React.FC<Props> = ({ handleOnEditClick, students }) => {
  return (
    <React.Fragment>
      {students
        ?.map?.((student, index) => (
          <StyledTableRow key={student.id}>
            <StyledTableCell>{index + 1}</StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {student.name}
            </StyledTableCell>
            <StyledTableCell>{student.age}</StyledTableCell>
            <StyledTableCell>{student.grades}</StyledTableCell>
            <StyledTableCell>{student.college}</StyledTableCell>
            <StyledTableCell>{student.city}</StyledTableCell>
            <StyledTableCell align="right">
              <Buttons
                labelText={"Edit"}
                handleOnClick={() => {
                  handleOnEditClick(student);
                }}
              />
            </StyledTableCell>
          </StyledTableRow>
        ))
        ?.reverse()}
    </React.Fragment>
  );
};

export default StudentTableRows;
