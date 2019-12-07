import React, { useEffect } from 'react';
import { Divider, Grid, Paper } from '@material-ui/core';

export default function PropertyList() {
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setIsLoading(false);
    }, 3000);
  });

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
      </Grid>
    </section>
  );
}
