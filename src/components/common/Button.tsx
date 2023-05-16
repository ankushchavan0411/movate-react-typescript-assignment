/** @format */

import Button from "@mui/material/Button";

interface Props {
  labelText: string;
  handleOnClick(): any;
}

const Buttons: React.FC<Props> = ({ labelText, handleOnClick }) => {
  return (
    <Button onClick={handleOnClick} variant="contained">
      {labelText || "Submit"}
    </Button>
  );
};
export default Buttons;
