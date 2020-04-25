import React, { useState } from 'react';
import { useSelector } from 'react-redux';
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
import PropertyDetailsModal from '../../../components/Properties/PropertyDetailsModal';

export default function PropTable() {
  const classes = useStyles();

  const propertyList = useSelector(state => state.propReducer.properties);

  // open/close state for modal
  const [openDetails, setOpenDetails] = useState(false);

  // store individual property from map function in local state
  const [currentProperty, setCurrentProperty] = useState({});

  // handle open/close, takes in the individual property
  // passed up from property card to gain access from the modal
  const handleOpen = property => {
    // sets the currentProperty state to the property object passed in
    setCurrentProperty(property);

    // this sets the open state for the PropertyDetailsModal
    setOpenDetails(true);
  };

  const handleClose = () => {
    // sets currentProperty to empty obj when modal is closed
    setCurrentProperty({});

    // sets the open state to false to close PropertyDetailsModal
    setOpenDetails(false);
  };

  return (
    <>
      <Table className={classes.table} aria-label="Property Table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Street</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">No. Tenants</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {propertyList.map(prop => (
            <TableRow
              key={prop.id}
              className={classes.row}
              onClick={() => {
                navigate(`/dashboard/properties/${prop.id}`);
                handleOpen(prop);
              }}
            >
              <TableCell>{prop.id}</TableCell>
              <TableCell align="right">{prop.name}</TableCell>
              <TableCell align="right">{prop.street_address}</TableCell>
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
      <PropertyDetailsModal
        property={currentProperty}
        open={openDetails}
        close={handleClose}
      />
    </>
  );
}
