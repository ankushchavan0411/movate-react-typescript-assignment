/** @format */
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addTeacher, editTeacher } from "../../redux/actions/teacherAction";
import { getUniqueId } from "../../utils";
import Buttons from "../common/Button";
import { alertMessage } from "../../redux/actions/alertsAction";
import {
  ADD_MESSAGE_TEXT,
  ALERT_TYPES,
  UPDATE_MESSAGE_TEXT,
} from "../../const";

interface Props {
  setOpen(isOpen: boolean): any;
  teacher?: any;
  isEdit?: boolean;
}

const AddEditTeacher: React.FC<Props> = ({ setOpen, teacher, isEdit }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [college, setCollege] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    setName(teacher?.name);
    setAge(teacher?.age);
    setCollege(teacher?.college);
    setSubject(teacher?.subject);
  }, [teacher]);

  const dispatch: Dispatch<any> = useDispatch();

  const handleOnSubmit = () => {
    if (isEdit) {
      dispatch(
        editTeacher({
          ...teacher,
          name,
          age,
          subject,
          college,
        })
      );
      dispatch(
        alertMessage({
          text: `${name} teacher ${UPDATE_MESSAGE_TEXT}`,
          type: ALERT_TYPES?.INFO,
        })
      );
    } else {
      dispatch(
        addTeacher({
          id: getUniqueId(),
          name,
          age,
          subject,
          college,
        })
      );
      dispatch(
        alertMessage({
          text: `${name} new teacher ${ADD_MESSAGE_TEXT}`,
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
            label="Teacher Name"
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
            error={!subject}
            required
            id="outlined-required"
            label="Subject"
            value={subject}
            onChange={(e: any): void => setSubject(e.target.value)}
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
        <Buttons
          labelText={isEdit ? "Update" : "Submit"}
          handleOnClick={handleOnSubmit}
          disabled={!name || !age || !college || !subject}
        />
      </Box>
    </React.Fragment>
  );
};

export default AddEditTeacher;
