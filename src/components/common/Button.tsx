/** @format */

import Button from "@mui/material/Button";

interface Props {
  labelText: string;
  handleOnClick: () => void;
  disabled?: boolean;
}

const Buttons: React.FC<Props> = ({
  labelText,
  handleOnClick,
  disabled = false,
}) => {
  return (
    <Button
      onClick={handleOnClick}
      variant="contained"
      fullWidth
      style={{ margin: 8 }}
      disabled={disabled}
    >
      {labelText || "Submit"}
    </Button>
  );
};
export default Buttons;
