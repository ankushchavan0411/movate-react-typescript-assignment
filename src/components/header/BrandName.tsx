/** @format */

import Typography from "@mui/material/Typography";
import { BRAND_NAME } from "../../const";

const BrandName = () => {
  return (
    <div className="brand-name">
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1 }}
        className="logo"
      >
        {BRAND_NAME}
      </Typography>
    </div>
  );
};
export default BrandName;
