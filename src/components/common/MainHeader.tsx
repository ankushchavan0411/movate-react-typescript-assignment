/** @format */
import Grid from "@mui/material/Unstable_Grid2";
import Buttons from "./Button";

interface Props {
  handleOnClick(): any;
  labelText: string;
}

const MainHeader: React.FC<Props> = ({ handleOnClick, labelText }) => {
  return (
    <section className="main-header">
      <Grid container spacing={2}>
        <Grid xs={10}>
          <h1>{labelText}</h1>
        </Grid>
        <Grid xs={2}>
          <Buttons labelText="Add New Course" handleOnClick={handleOnClick} />
        </Grid>
      </Grid>
    </section>
  );
};

export default MainHeader;
