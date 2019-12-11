import React /* { useState, useEffect, useCallback } */ from 'react';
// import { useDispatch } from 'react-redux';
import { Divider, Grid, Paper } from '@material-ui/core';
import { useDataFetch } from '../../hooks';

const propUrl = 'https://pt6-propman.herokuapp.com/api/properties';

export default function PropertyList() {
  const [data, loading] = useDataFetch(propUrl);
  console.log(data, loading);
  // useEffect(() => {
  //   setTimeout(() => {
  //     // setIsLoading(false);
  //   }, 3000);
  // });

  return (
    <section className="prop-grid">
      <header className="prop-grid__header">
        <br />
        <h4>Properties</h4>
        <Divider />
      </header>
      <Grid
        className="prop-grid__container"
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {loading ? (
          <>
            <Grid item>
              <Paper className="prop-grid__item" elevation={5}>
                This will be a property
              </Paper>
            </Grid>
            <Grid item>
              <Paper>This will be a property</Paper>
            </Grid>
            <Grid item>
              <Paper>This will be a property</Paper>
            </Grid>
            <Grid item>
              <Paper>This will be a property</Paper>
            </Grid>
            <Grid item>
              <Paper>This will be a property</Paper>
            </Grid>
            <Grid item>
              <Paper>This will be a property</Paper>
            </Grid>
            <Grid item>
              <Paper>This will be a property</Paper>
            </Grid>
          </>
        ) : (
          <>
            {data.map(({ propertiesId, propertyName }) => (
              <Grid item>
                <Paper>
                  <h2>{propertiesId}</h2>
                  <p>{propertyName}</p>
                </Paper>
              </Grid>
            ))}
          </>
        )}
      </Grid>
    </section>
  );
}
