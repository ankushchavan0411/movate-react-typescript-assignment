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
import { addStudent, editStudent } from "../../redux/actions/studentAction";
import { IStudent } from "../../types/types";
import { getUniqueId } from "../../utils";
import Buttons from "../common/Button";

interface Props {
  setOpen: (isOpen: boolean) => void;
  student: IStudent;
  isEdit: boolean;
}

const AddEditStudent: React.FC<Props> = ({ setOpen, student, isEdit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grades, setGrades] = useState("");
  const [college, setCollege] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setName(student?.name);
    setAge(student?.age);
    setCollege(student?.college);
    setGrades(student?.grades);
    setCity(student?.city);
  }, [student]);

  const dispatch: Dispatch<any> = useDispatch();

  const handleOnSubmit = () => {
    if (isEdit) {
      dispatch(
        editStudent({
          ...student,
          name,
          age,
          grades,
          college,
          city,
        })
      );
      dispatch(
        alertMessage({
          text: `${name} student ${UPDATE_MESSAGE_TEXT}`,
          type: ALERT_TYPES?.INFO,
        })
      );
    } else {
      dispatch(
        addStudent({
          id: getUniqueId(),
          name,
          age,
          grades,
          college,
          city,
        })
      );
      dispatch(
        alertMessage({
          text: `${name} new student ${ADD_MESSAGE_TEXT}`,
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
            error={!name}
            required
            id="outlined-required"
            label="Student Name"
            value={name}
            onChange={(e: any): void => setName(e.target.value)}
            autoFocus
          />
        </div>
        <div>
          <TextField
            error={!age}
            value={age}
            id="outlined-number"
            label="Age-(In Years)"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e: any): void => setAge(e.target.value)}
          />
        </div>
        <div>
          <TextField
            error={!grades}
            required
            id="outlined-required"
            label="Grade"
            value={grades}
            onChange={(e: any): void => setGrades(e.target.value)}
            autoFocus
          />
        </div>
        <div>
          <TextField
            error={!college}
            required
            id="outlined-required"
            label="College"
            value={college}
            onChange={(e: any): void => setCollege(e.target.value)}
            autoFocus
          />
        </div>
        <div>
          <TextField
            error={!city}
            required
            id="outlined-required"
            label="City"
            value={city}
            onChange={(e: any): void => setCity(e.target.value)}
            autoFocus
          />
        </div>
        <Buttons
          labelText={isEdit ? "Update" : "Submit"}
          handleOnClick={handleOnSubmit}
          disabled={!name || !age || !college || !grades || !city}
        />
      </Box>
    </React.Fragment>
  );
};

export default AddEditStudent;
