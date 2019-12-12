import React, { useEffect } from 'react';
import { Divider, Grid, Paper } from '@material-ui/core';
// redux
import { useSelector, useDispatch } from 'react-redux';
// action
import { getProperties } from '../../store/actions';

const propUrl = 'https://pt6-propman-staging.herokuapp.com/api/properties';

export default function PropertyList() {
  const dispatch = useDispatch();

  const { properties } = useSelector(state => state.propReducer.properties);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getProperties(propUrl));
    }, 2000);
  }, [dispatch]);

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
        {!properties ? (
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
            {properties.map(({ propertiesId, propertyName }) => (
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
