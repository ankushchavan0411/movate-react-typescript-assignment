/** @format */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addCourse } from "../../redux/actions/courseAction";
import { getUniqueId } from "../../utils";
import Buttons from "../common/Button";

interface Props {
  setOpen(isOpen: boolean): any;
}

const AddEditCourse: React.FC<Props> = ({ setOpen }) => {
  const [courseName, setCourseName] = useState("");
  const [courseDuration, setCourseDuration] = useState(null);

  const dispatch: Dispatch<any> = useDispatch();

  const handleOnClick = () => {
    dispatch(
      addCourse({
        id: getUniqueId(),
        name: courseName,
        durationInMonths: courseDuration || 0,
      })
    );
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
            label="Course Duration"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e: any): void => setCourseDuration(e.target.value)}
          />
        </div>
        <Buttons
          labelText="Submit"
          handleOnClick={handleOnClick}
          disabled={!courseDuration || !courseName}
        />
      </Box>
    </React.Fragment>
  );
};

export default AddEditCourse;
