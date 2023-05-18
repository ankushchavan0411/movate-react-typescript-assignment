/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ALERT_TYPES, DELETE_MESSAGE_TEXT, DO_YOU_WISH } from "../../const";
import { alertMessage } from "../../redux/actions/alertsAction";
import { IStudent } from "../../types/types";
import AreYouSure from "../common/AreYouSure";
import NoData from "../common/NoData";
import StudentRowItem from "./StudentRowItem";
import { deleteStudent } from "../../redux/actions/studentAction";

interface Props {
  handleOnEditClick: (student: IStudent) => void;
  students: IStudent[];
}

const StudentTableRows: React.FC<Props> = ({ handleOnEditClick, students }) => {
  const [isOpen, setOpen] = useState(false);
  const [studentsItem, setStudentItem] = useState({} as IStudent);

  const dispatch: Dispatch<any> = useDispatch();

  return (
    <React.Fragment>
      {students?.length <= 0 ? (
        <NoData />
      ) : (
        <React.Fragment>
          {students
            ?.map?.((student, index) => (
              <StudentRowItem
                key={student.id}
                student={student}
                index={index}
                handleOnEditClick={handleOnEditClick}
                setOpen={setOpen}
                setStudentItem={setStudentItem}
              />
            ))
            ?.reverse()}
        </React.Fragment>
      )}
      <AreYouSure
        isOpen={isOpen}
        setOpen={setOpen}
        render={
          <p>
            {DO_YOU_WISH} <strong>{studentsItem?.name} </strong> student?
          </p>
        }
        handleOnConfirmClick={() => {
          dispatch(deleteStudent(studentsItem));
          dispatch(
            alertMessage({
              text: `${studentsItem?.name} student ${DELETE_MESSAGE_TEXT}`,
              type: ALERT_TYPES?.SUCCESS,
            })
          );
          setOpen(false);
        }}
      />
    </React.Fragment>
  );
};

export default StudentTableRows;
