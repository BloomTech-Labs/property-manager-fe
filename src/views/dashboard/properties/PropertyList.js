import React from 'react';
import { Skeleton } from '@material-ui/lab';
import {
  Card,
  Grid,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
  IconButton
} from '@material-ui/core';
import { MdFavorite } from 'react-icons/md';

export default function PropertyList() {
  return (
    <div>
      <h1>List of Properties</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardHeader
              avatar={<Skeleton variant="circle" width={50} height={50} />}
              title={<Skeleton variant="text" />}
            />
            <CardContent>
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" />
            </CardContent>
            <CardActionArea>
              <CardActions>
                <IconButton>
                  <MdFavorite />
                </IconButton>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
