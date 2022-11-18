import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { CoinsType, TableRows } from "../../../types/types";

import styled from "styled-components";

interface TableProps {
  tableRows: TableRows;
  tableColumns: CoinsType;
}

const StyledTable = styled(Table)`
  min-width: 650px;
`;

const StyledTableRow = styled(TableRow)`
  :last-child td,
  &:last-child th {
    border: 0;
  }
`;

export default function CurrenciesTable({ tableRows, tableColumns }: TableProps) {
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableRows?.map((row) => {
              return <TableCell key={row.title}>{row.title}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableColumns?.map((row) => (
            <StyledTableRow key={row.code}>
              <TableCell component="th" scope="row">
                {row.code}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.rate_float}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.rate}
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
