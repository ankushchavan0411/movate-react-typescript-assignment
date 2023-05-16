/** @format */

import React from "react";
import { ITeacher } from "../../types/types";
import Buttons from "../common/Button";
import { StyledTableCell, StyledTableRow } from "../common/style";

interface Props {
  handleOnEditClick(teacher: ITeacher): any;
  teachers: any;
}

const TableRows: React.FC<Props> = ({ handleOnEditClick, teachers }) => {
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

export default TableRows;
