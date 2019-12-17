/* eslint react/prop-types: 0 */
import React from 'react';
// Router
import { navigate } from '@reach/router';
// MUI Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

// Defaults
import { Skeleton } from '@material-ui/lab';

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

// This component represents a single PropertyCard
//
// If the card is used with no props it will
// default to placeholder.
//
// Properties:
//
// props.title: string | default: <Skeleton />
// props.icon: component | default: <Skeleton />
// props.svg: component | default: <Skeleton />
//
// WIP: Make the CardMedia dynamic to accept an image
// instead of only an SVG component as a property.

export default function PropertyCard(props) {
  const classes = useStyles();

  const { icon, title, svg, handleOpen, property, upperPath, iconPath } = props;

  // event handler for clicking on the upper CardActionArea
  const handleClick = () => {
    // conditional logic to check if handleOpen property exists
    if (handleOpen) {
      // We call the handleOpen() function passed down as a prop
      // and give it the property that was passed down as a prop.
      //
      // This gives us access to the property object data that we
      // can use in the individual property Modal
      return handleOpen(property);
    }

    return null;
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardActionArea
          onClick={() => {
            navigate(upperPath);

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
}
