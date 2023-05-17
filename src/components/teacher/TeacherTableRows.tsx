/** @format */

import EditIcon from "@mui/icons-material/Edit";
import React from "react";
import { ITeacher } from "../../types/types";
import Buttons from "../common/Button";
import { StyledTableCell, StyledTableRow } from "../common/style";

interface Props {
  handleOnEditClick: (teacher: ITeacher) => void;
  teachers: ITeacher[];
}

const TeacherTableRows: React.FC<Props> = ({ handleOnEditClick, teachers }) => {
  return (
    <React.Fragment>
      {teachers
        ?.map?.((teacher, index) => (
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
                startIcon={<EditIcon />}
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

export default TeacherTableRows;
