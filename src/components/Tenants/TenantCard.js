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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    maxWidth: 345
  },
  upperArea: {
    height: '100%'
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

const TenantCard = ({
  upperPath,
  iconPath,
  title,
  icon,
  svg,
  property,
  handleOpen,
  tenant
}) => {
  const classes = useStyles();

  const handleClick = () => {
    if (handleOpen) {
      // We call the handleOpen() func passed as prop
      // and give it the tenant & property that
      // was passed as props
      // This gives access to the obj data we can
      // use in the individual tenant modal
      return handleOpen(property, tenant);
    }

    return null;
  };

  return (
    <Grid className={classes.grid} item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardActionArea
          className={classes.upperArea}
          onClick={e => {
            e.stopPropagation();
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
            {property && <Typography>Resident of {property.name}</Typography>}
          </CardContent>
        </CardActionArea>

        <CardActionArea
          onClick={() => {
            navigate(iconPath);
          }}
        >
          <Divider />
          <CardActions className={classes.cardAction}>
            {icon || <Skeleton variant="circle" width={28} height={28} />}
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default TenantCard;
