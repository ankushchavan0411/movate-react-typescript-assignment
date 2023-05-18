/** @format */
import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../components/common/spinner";
import { AppState } from "../redux/store";
import RouterItems from "./RouterItems";

const Pages = () => {
  const { loading } = useSelector((state: AppState) => state.loader);
  return (
    <React.Fragment>
      {loading ? <Spinner /> : null}
      <RouterItems />
    </React.Fragment>
  );
};

export default Pages;
