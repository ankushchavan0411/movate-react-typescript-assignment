/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ALERT_TYPES, DELETE_MESSAGE_TEXT, DO_YOU_WISH } from "../../const";
import { alertMessage } from "../../redux/actions/alertsAction";
import { deleteTeacher } from "../../redux/actions/teacherAction";
import { ITeacher } from "../../types/types";
import AreYouSure from "../common/AreYouSure";
import NoData from "../common/NoData";
import TeacherRowItem from "./TeacherRowItem";
interface Props {
  handleOnEditClick: (teacher: ITeacher) => void;
  teachers: ITeacher[];
}

const TeacherTableRows: React.FC<Props> = ({ handleOnEditClick, teachers }) => {
  const [isOpen, setOpen] = useState(false);
  const [teacherItem, setTeacherItem] = useState({} as ITeacher);

  const dispatch: Dispatch<any> = useDispatch();

  return (
    <React.Fragment>
      {teachers?.length <= 0 ? (
        <NoData />
      ) : (
        <React.Fragment>
          {teachers
            ?.map?.((teacher, index) => (
              <TeacherRowItem
                key={teacher.id}
                teacher={teacher}
                index={index}
                handleOnEditClick={handleOnEditClick}
                setOpen={setOpen}
                setTeacherItem={setTeacherItem}
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
            {DO_YOU_WISH} <strong>{teacherItem?.name} </strong> teacher?
          </p>
        }
        handleOnConfirmClick={() => {
          dispatch(deleteTeacher(teacherItem));
          dispatch(
            alertMessage({
              text: `${teacherItem?.name} teacher ${DELETE_MESSAGE_TEXT}`,
              type: ALERT_TYPES?.SUCCESS,
            })
          );
          setOpen(false);
        }}
      />
    </React.Fragment>
  );
};

export default TeacherTableRows;
