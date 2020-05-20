/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { navigate } from '@reach/router';
import useStyles from './propTableStyles';

export default function PropTable({ properties, searchResults }) {
  const classes = useStyles();
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (searchResults.length !== 0) {
      setArray(searchResults);
    } else {
      setArray(properties);
    }
  }, [searchResults, properties]);

  return (
    <>
      <Table className={classes.table} aria-label="Property Table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Street</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">No. Tenants</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {array.map(prop => (
            <TableRow
              key={prop.id}
              className={classes.row}
              onClick={() => {
                navigate(`/dashboard/properties/${prop.id}`);
              }}
            >
              <TableCell>{prop.id}</TableCell>
              <TableCell align="right">{prop.name}</TableCell>
              <TableCell align="right">{prop.street_address}</TableCell>
              <TableCell align="right">{prop.city}</TableCell>
              <TableCell align="right">{prop.state}</TableCell>
              <TableCell align="right">{prop.occupied}</TableCell>
              <TableCell align="right">
                <EditIcon
                  style={{ cursor: 'pointer' }}
                  onClick={e => {
                    e.stopPropagation();
                    navigate(`/dashboard/properties/edit/${prop.id}`);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
