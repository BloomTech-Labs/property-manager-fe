import React from 'react';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});
function createData(property, tenants, payments) {
  return { property, tenants, payments };
}
const rows = [createData('123 Ez Street', 2, 2)];

export default function PropTable() {
  const classes = useStyles();
  // const properties = this.props.propertyList;

  return (
    <TableContainer component={Paper}>
      <Table classname={classes.table} aria-label="Property Table">
        <TableHead>
          <TableRow>
            <TableCell>Properties</TableCell>
            <TableCell align="right">Tenants</TableCell>
            <TableCell align="right">Payments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.property}>
              <TableCell component="th" scope="row">
                {row.property}
              </TableCell>
              <TableCell align="right">{row.tenants}</TableCell>
              <TableCell align="right">{row.payments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
