/** @format */

import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="page-not-found">
      <h1>404</h1>
      <h2>Sorry, page not found</h2>
      <Link to={"/"}>Go to home page</Link>
    </section>
  );
};

export default PageNotFound;
