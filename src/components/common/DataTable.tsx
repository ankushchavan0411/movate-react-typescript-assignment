/** @format */
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import { GridColDef } from "@mui/x-data-grid";
import { ICourse } from "../../const/types";
import Button from "./Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface DataTableProps {
  rows: ICourse[];
  columns: GridColDef[];
}
const DataTable: React.FC<DataTableProps> = ({ rows, columns }) => {
  return (
    <div style={{ height: 470, width: "100%" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns?.map((col) => {
                if (col?.field === "action") {
                  return (
                    <StyledTableCell key={col?.field} align="right">
                      Action
                    </StyledTableCell>
                  );
                }
                return (
                  <StyledTableCell key={col?.field}>
                    {col?.headerName}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell>{row.id}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell>{row.durationInMonths}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    labelText={"Edit"}
                    handleOnClick={() => {
                      console.log("button click");
                    }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default DataTable;
