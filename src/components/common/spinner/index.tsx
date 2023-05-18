/** @format */

import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/store";
import "./spinner.css";

const Spinner = () => {
  const { loading } = useSelector((state: AppState) => state.loader);

  return (
    <React.Fragment>
      <div
        className="loadingio-spinner-spinner-ea3jpvcz86w"
        style={{ display: `${loading ? "" : "none"}` }}
      >
        <div className="ldio-chy3e6ktpld">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Spinner;
