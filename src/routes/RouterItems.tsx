/** @format */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "../components/common/Loader";
import PageNotFound from "../components/common/PageNotFound";
import RoutesList from "./RoutesList";

const RouterItems = () => {
  return (
    <Routes>
      {RoutesList?.map((route) => (
        <Route
          key={route?.path}
          path={route?.path}
          element={
            <React.Suspense fallback={<Loader />}>
              <route.Component />
            </React.Suspense>
          }
        />
      ))}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RouterItems;
