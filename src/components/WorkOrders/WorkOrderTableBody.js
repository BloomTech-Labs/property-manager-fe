/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, navigate } from '@reach/router';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

function WorkOrderTableBody({ workOrderList }) {
  const properties = useSelector(state => state.propReducer.properties);

  console.log(workOrderList);

  return (
    <>
      <TableBody>
        {workOrderList.map(workOrder => {
          const {
            id,
            name,
            description,
            type,
            start_date,
            unit_id,
            comment,
            status,
            end_date,
            in_house,
            user_id
          } = workOrder;

          // Filter to select the property associated with the work order
          const property = properties.filter(
            property => property.id === unit_id
          );

          // This function gets called later to format a given date
          const formatDate = date => date && new Date(date).toDateString();

          return (
            <>
              <TableRow
                className="table-row"
                onClick={() => navigate(`/dashboard/workorders/${id}`)}
              >
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="left">{description}</TableCell>
                <TableCell align="left">{type}</TableCell>
                <TableCell align="left">{formatDate(start_date)}</TableCell>
                <TableCell align="left">{property[0].name}</TableCell>
                <TableCell align="left">{user_id}</TableCell>
                <TableCell align="left">{status}</TableCell>
                <TableCell align="right">
                  <Link to={`/dashboard/workordersedit/${id}`}>
                    <CreateIcon />
                  </Link>
                </TableCell>
              </TableRow>
            </>
          );
        })}
      </TableBody>
    </>
  );
}

export default WorkOrderTableBody;
