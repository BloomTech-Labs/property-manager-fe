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

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function PropTable(props) {
  const classes = useStyles();
  //const properties = this.props.propertyList;

  return (
    <Table classname={classes.table} aria-lable="Property Table">
      <TableHead>
        <TableRow>
          <TableCell>Properties</TableCell>
          <TableCell align="right">Tenants</TableCell>
          <TableCell align="right">Payments</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
}
