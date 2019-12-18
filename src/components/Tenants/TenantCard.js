/* eslint-disable react/prop-types */
import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Divider
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import { navigate } from '@reach/router';

// Component Styling
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      height: 140
    }
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      fontSize: '2rem',
      color: '#76e276',
      transition: '0.3s'
    },
    '&:hover': {
      '& > svg': {
        color: '#2d3b4f'
      }
    }
  }
});

const TenantCard = ({ upperPath, iconPath, title, icon, svg }) => {
  const classes = useStyles();

  const handleClick = () => {};

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardActionArea
          onClick={() => {
            if (upperPath) {
              navigate(upperPath);
            }

            handleClick();
          }}
        >
          <CardMedia className={classes.media}>
            {svg || <Skeleton variant="rect" height={140} width="100%" />}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title || <Skeleton />}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActionArea
          onClick={() => {
            navigate(iconPath);
          }}
        >
          <CardActions className={classes.cardAction}>
            {icon || <Skeleton variant="circle" width={28} height={28} />}
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default TenantCard;
