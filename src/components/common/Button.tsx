/** @format */

import Button from "@mui/material/Button";

const Buttons = ({ labelText = "Submit" as string }) => {
  return <Button variant="contained">{labelText}</Button>;
};
export default Buttons;
