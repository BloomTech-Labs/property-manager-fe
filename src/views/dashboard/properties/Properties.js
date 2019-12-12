/* eslint-disable no-lone-blocks */
import React, { useEffect } from 'react';
import { Skeleton } from '@material-ui/lab';
import {
  Paper,
  Grid,
  CardHeader,
  CardContent,
  Typography,
  Divider
} from '@material-ui/core';
// redux
import { useSelector, useDispatch } from 'react-redux';
// action
import { getProperties } from '../../../store/actions';

export default function PropertyList() {
  const dispatch = useDispatch();

  const { properties } = useSelector(state => state.propReducer.properties);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        getProperties(
          'https://pt6-propman-staging.herokuapp.com/api/properties'
        )
      );
    }, 2000);
  }, [dispatch]);

  console.log(properties);

  return (
    <div>
      <h1>List of Properties</h1>
      <Divider />
      <br />
      <Grid container spacing={3}>
        {properties ? (
          properties.map(property => {
            const {
              propertiesId,
              // eslint-disable-next-line no-unused-vars
              name,
              propertyAddress,
              propertyName
              // propertyStatus
            } = property;

            // const {
            //   // firstname,
            //   // lastname,
            //   // middlename,
            //   // preferredname,
            //   // suffix,
            //   // title
            // } = name;
            const {
              city,
              // country,
              state
              // street,
              // street2,
              // zip
            } = propertyAddress;

            return (
              <Grid key={propertiesId} item xs={12} sm={6} md={4} lg={3}>
                <Paper elevation={5}>
                  <CardHeader
                    title={
                      <Typography variant="body1">{propertyName}</Typography>
                    }
                  />

                  {propertyAddress.city ? (
                    <CardContent>
                      <Typography variant="subtitle2">Location:</Typography>
                      <Typography variant="caption">
                        {city}, {state}
                      </Typography>
                    </CardContent>
                  ) : (
                    <CardContent>
                      <Typography variant="caption">
                        No location info.
                      </Typography>
                    </CardContent>
                  )}
                </Paper>
              </Grid>
            );
          })
        ) : (
          <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={5}>
                <CardHeader title={<Skeleton variant="text" />} />
                <CardContent>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </CardContent>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={5}>
                <CardHeader title={<Skeleton variant="text" />} />
                <CardContent>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </CardContent>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Paper elevation={5}>
                <CardHeader title={<Skeleton variant="text" />} />
                <CardContent>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                </CardContent>
              </Paper>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}
