/** @format */

import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function Loader() {
  return (
    <section className="loader">
      <Box sx={{ width: "100vh" }}>
        <Skeleton variant="rounded" width={"100%"} height={70} />
        <Box width={"100%"} height={60} />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </Box>
    </section>
  );
}
