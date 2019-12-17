import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProperties } from '../../../store/actions';
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

export default function PropTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const propertyList = useSelector(state => state.propReducer.properties);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        getProperties(
          'https://pt6-propman-staging.herokuapp.com/api/properties'
        )
      ).then(() => {
        setLoading(false);
      });
    }, 2000);
  }, [dispatch]);

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
