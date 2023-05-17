/** @format */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  ADD_MESSAGE_TEXT,
  ALERT_TYPES,
  UPDATE_MESSAGE_TEXT,
} from "../../const";
import { alertMessage } from "../../redux/actions/alertsAction";
import { addCourse, editCourse } from "../../redux/actions/courseAction";
import { ICourse } from "../../types/types";
import { getUniqueId } from "../../utils";
import Buttons from "../common/Button";

interface Props {
  setOpen: (isOpen: boolean) => void;
  course: ICourse;
  isEdit?: boolean;
}

const AddEditCourse: React.FC<Props> = ({ setOpen, course, isEdit }) => {
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState("");

  useEffect(() => {
    setCourseName(course?.name);
    setCourseDuration(course?.durationInMonths);
  }, [course]);

  const dispatch: Dispatch<any> = useDispatch();

  const handleOnSubmit = () => {
    if (isEdit) {
      dispatch(
        editCourse({
          ...course,
          name: courseName,
          durationInMonths: courseDuration,
        })
      );
      dispatch(
        alertMessage({
          text: `${courseName} course ${UPDATE_MESSAGE_TEXT}`,
          type: ALERT_TYPES?.INFO,
        })
      );
    } else {
      dispatch(
        addCourse({
          id: getUniqueId(),
          name: courseName,
          durationInMonths: courseDuration,
        })
      );
      dispatch(
        alertMessage({
          text: `${courseName} new course ${ADD_MESSAGE_TEXT}`,
          type: ALERT_TYPES?.SUCCESS,
        })
      );
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            error={!courseName}
            required
            id="outlined-required"
            label="Course Name"
            value={courseName}
            onChange={(e: any): void => setCourseName(e.target.value)}
            autoFocus
          />
        </div>
        <div>
          <TextField
            error={!courseDuration}
            value={courseDuration}
            id="outlined-number"
            label="Course Duration-(In Months)"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e: any): void => setCourseDuration(e.target.value)}
          />
        </div>
        <Buttons
          labelText={isEdit ? "Update" : "Submit"}
          handleOnClick={handleOnSubmit}
          disabled={!courseDuration || !courseName}
        />
      </Box>
    </React.Fragment>
  );
};

export default AddEditCourse;
