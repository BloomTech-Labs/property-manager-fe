import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function PropTable() {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  const propertyList = useSelector(state => state.propReducer.properties);

  return (
    <Table className={classes.table} aria-label="Property Table">
      <TableHead>
        <TableRow>
          <TableCell>Properties</TableCell>
          <TableCell align="right">Address</TableCell>
          <TableCell align="right">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {propertyList.map(({ id, name, street, status }) => (
          <TableRow key={id}>
            <TableCell component="th" scope="row">
              {name}
            </TableCell>
            <TableCell align="right">{street}</TableCell>
            <TableCell align="right">{status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
