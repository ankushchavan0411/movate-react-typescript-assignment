/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { ALERT_TYPES, DELETE_MESSAGE_TEXT, DO_YOU_WISH } from "../../const";
import { deleteCourse } from "../../redux/actions/CourseAction";
import { alertMessage } from "../../redux/actions/alertsAction";
import { ICourse } from "../../types/types";
import AreYouSure from "../common/AreYouSure";
import NoData from "../common/NoData";
import RowItem from "./RowItem";

interface Props {
  handleOnEditClick: (course: ICourse) => void;
  courses: ICourse[];
}

const CourseTableRows: React.FC<Props> = ({ handleOnEditClick, courses }) => {
  const [isOpen, setOpen] = useState(false);
  const [courseItem, setCourseItem] = useState({} as ICourse);

  const dispatch: Dispatch<any> = useDispatch();

  return (
    <React.Fragment>
      {courses?.length <= 0 ? (
        <NoData />
      ) : (
        <React.Fragment>
          {courses
            ?.map?.((course, index) => (
              <RowItem
                key={course.id}
                course={course}
                index={index}
                handleOnEditClick={handleOnEditClick}
                setOpen={setOpen}
                setCourseItem={setCourseItem}
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
            {DO_YOU_WISH} <strong>{courseItem?.name} </strong> course?
          </p>
        }
        handleOnConfirmClick={() => {
          dispatch(deleteCourse(courseItem));
          dispatch(
            alertMessage({
              text: `${courseItem?.name} course ${DELETE_MESSAGE_TEXT}`,
              type: ALERT_TYPES?.SUCCESS,
            })
          );
          setOpen(false);
        }}
      />
    </React.Fragment>
  );
};

export default CourseTableRows;
