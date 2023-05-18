/** @format */

import Button from "@mui/material/Button";

interface Props {
  labelText: string;
  handleOnClick: () => void;
  disabled?: boolean;
  color?: "secondary" | "success" | "error" | "primary" | "warning";
  variant?: "outlined" | "contained";
  size?: "small" | "medium" | "large";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Buttons: React.FC<Props> = ({
  labelText,
  handleOnClick,
  disabled = false,
  color = "primary",
  variant = "contained",
  size = "medium",
  startIcon = <></>,
  endIcon = <></>,
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={handleOnClick}
      size={size}
      fullWidth
      style={{ margin: 8 }}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {labelText || "Submit"}
    </Button>
  );
};
export default Buttons;
