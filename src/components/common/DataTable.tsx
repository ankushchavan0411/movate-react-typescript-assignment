/** @format */
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GridColDef } from "@mui/x-data-grid";
import { StyledTableCell } from "./style";

interface DataTableProps {
  columns: GridColDef[];
  render?: any;
}
const DataTable: React.FC<DataTableProps> = ({ columns, render }) => {
  return (
    <TableContainer component={Paper} style={{ height: 420, width: "100%" }}>
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
        <TableBody className="text-capitalize">{render}</TableBody>
      </Table>
    </TableContainer>
  );
};
export default DataTable;
