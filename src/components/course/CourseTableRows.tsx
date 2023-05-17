/** @format */

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ALERT_TYPES, DELETE_MESSAGE_TEXT } from "../../const";
import { alertMessage } from "../../redux/actions/alertsAction";
import { deleteCourse } from "../../redux/actions/courseAction";
import { ICourse } from "../../types/types";
import Buttons from "../common/Button";
import NoData from "../common/NoData";
import { StyledTableCell, StyledTableRow } from "../common/style";

interface Props {
  handleOnEditClick: (course: ICourse) => void;
  courses: ICourse[];
}

const CourseTableRows: React.FC<Props> = ({ handleOnEditClick, courses }) => {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <React.Fragment>
      {courses?.length <= 0 ? (
        <NoData />
      ) : (
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
                        dispatch(deleteCourse(course));
                        dispatch(
                          alertMessage({
                            text: `${course?.name} course ${DELETE_MESSAGE_TEXT}`,
                            type: ALERT_TYPES?.SUCCESS,
                          })
                        );
                      }}
                    />
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))
            ?.reverse()}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default CourseTableRows;
