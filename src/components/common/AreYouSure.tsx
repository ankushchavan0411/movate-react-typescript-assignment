/** @format */

import Stack from "@mui/material/Stack";
import { ARE_YOU_SURE, IF_SO } from "../../const";
import Buttons from "./Button";
import DataModal from "./DataModal";

type AreYouSureProps = {
  render: React.ReactNode;
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  handleOnConfirmClick: () => void;
};

const AreYouSure: React.FC<AreYouSureProps> = ({
  render,
  isOpen,
  setOpen,
  handleOnConfirmClick,
}) => {
  return (
    <DataModal isOpen={isOpen} setOpen={setOpen} modalTitle={ARE_YOU_SURE}>
      {render}
      <p>{IF_SO}</p>
      <Stack spacing={2} direction={"row"}>
        <Buttons
          color="secondary"
          labelText={"Cancel"}
          handleOnClick={() => setOpen(false)}
        />
        <Buttons
          color="success"
          labelText={"Confirm"}
          handleOnClick={handleOnConfirmClick}
        />
      </Stack>
    </DataModal>
  );
};
export default AreYouSure;
