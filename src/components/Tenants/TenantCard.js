/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
// eslint-disable-next-line
import { navigate } from '@reach/router';
import IconButton from '../UI/IconButton';

// Component Styling
const useStyles = makeStyles({
  cell: {
    minWidth: '12vw'
  },
  row: {
    cursor: 'pointer',
    transition: 'all .2s ease',
    '&:hover': {
      background: '#f9a826',
      borderRadius: '50px',
      '& > *': {
        color: '#fff'
      }
    }
  }
});

const TenantCard = ({ tenants, searchResults }) => {
  const classes = useStyles();
  const formatDate = date => date && new Date(date).toDateString();
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (searchResults.length !== 0) {
      setArray(searchResults);
    } else {
      setArray(tenants);
    }
  }, [searchResults, tenants]);

  return (
    <>
      <IconButton
        text="Add New"
        icon={<AddIcon />}
        url="/dashboard/tenants/add"
      />
      {array.length === 0 ? (
        <div className={classes.empty}>
          <h3>No tenants have been added, yet...</h3>
        </div>
      ) : (
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.cell}>Tenant</TableCell>
                <TableCell className={classes.cell}>Property</TableCell>
                <TableCell className={classes.cell}>Phone</TableCell>
                <TableCell className={classes.cell}>Email</TableCell>
                <TableCell className={classes.cell}>Lease End</TableCell>
              </TableRow>
            </TableHead>
            {/* Here we separate the table, above are the headings, below are the actual data sects. */}
            <TableBody>
              {array.map((
                tenant // Create a row for each tenant
              ) => (
                <TableRow
                  className={classes.row}
                  key={tenant.id}
                  onClick={() => navigate(`/dashboard/tenants/${tenant.id}`)}
                >
                  <TableCell>{tenant.displayName}</TableCell>
                  <TableCell>{tenant.unit_name}</TableCell>
                  <TableCell>{tenant.phoneNumber}</TableCell>
                  <TableCell>{tenant.email}</TableCell>
                  <TableCell>{formatDate(tenant.lease_end)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </>
  );
};

export default TenantCard;
