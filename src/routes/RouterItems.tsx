/** @format */
import React from "react";
import { Route, Routes } from "react-router-dom";
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
            <React.Suspense fallback={<>Loading...</>}>
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
