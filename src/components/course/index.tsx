/** @format */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store";
import { ICourse } from "../../types/types";
import Buttons from "../common/Button";
import DataModal from "../common/DataModal";
import DataTable from "../common/DataTable";
import MainHeader from "../common/MainHeader";
import { StyledTableCell, StyledTableRow } from "../common/style";
import AddEditCourse from "./AddEditCourse";

const Course = () => {
  const { courses } = useSelector((state: AppState) => state.courses);
  const [isOpen, setOpen] = React.useState(false);
  const [course, setCourse] = useState({});
  const [isEdit, setEdit] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Course Name", width: 500 },
    { field: "durationInMonths", headerName: "Course Duration", width: 300 },
    { field: "action", headerName: "Action", width: 300 },
  ];

  interface Props {
    handleOnEditClick(course: ICourse): any;
  }

  const Rows: React.FC<Props> = ({ handleOnEditClick }) => {
    return (
      <React.Fragment>
        {courses
          ?.map?.((course: ICourse, index: number) => (
            <StyledTableRow key={course.id}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {course.name}
              </StyledTableCell>
              <StyledTableCell>{course.durationInMonths}</StyledTableCell>
              <StyledTableCell align="right">
                <Buttons
                  labelText={"Edit"}
                  handleOnClick={() => {
                    handleOnEditClick(course);
                  }}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))
          ?.reverse()}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <DataModal
        setOpen={setOpen}
        isOpen={isOpen}
        modalTitle={`${isEdit ? "Edit" : "Add"} Course`}
      >
        <AddEditCourse setOpen={setOpen} course={course} isEdit={isEdit} />
      </DataModal>
      <MainHeader
        handleOnClick={() => {
          setOpen(true);
          setCourse({});
          setEdit(false);
        }}
        labelText="COURSE"
      />
      <DataTable
        columns={columns}
        render={
          <Rows
            handleOnEditClick={(course: any): void => {
              setCourse(course);
              setOpen(true);
              setEdit(true);
            }}
          />
        }
      />
    </React.Fragment>
  );
};
export default Course;
