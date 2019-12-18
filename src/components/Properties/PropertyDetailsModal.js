import React from 'react';
import PropTypes from 'prop-types';

// MUI
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';

// Icons
import { FaPen, FaHome } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';

// Components
import { navigate } from '@reach/router';
import { Button } from '@material-ui/core';
import MuiModal from '../UI/MuiModal';
import LocationSVG from '../SVG/LocationSVG';

// Define styling for modal
const useStyles = makeStyles(theme => ({
  card: {
    width: 400
  },
  title: {
    margin: 0,
    lineHeight: 1
  },
  avatar: {
    backgroundColor: '#2d3b4f'
  },
  media: {
    padding: theme.spacing(2)
  },
  address: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& h4': {
      marginRight: theme.spacing(2)
    }
  },
  tenantInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& button': {
      marginTop: theme.spacing(2)
    }
  }
}));

export default function PropertyDetailsModal({ property, open, close }) {
  // bring in access to custom styling
  const classes = useStyles();

  // Pull out data from the property object passed
  // in from Properties.js component
  const { id, city, name, state, status, street, zip } = property;
  // TODO: add in functionality to handle the image
  // from the property object and allow SVG default

  return (
    <MuiModal open={open} close={close}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <FaHome />
            </Avatar>
          }
          title={<h4 className={classes.title}>{name}</h4>}
          action={
            <IconButton
              onClick={() => navigate(`properties/edit/${id}`)}
              aria-label="edit"
            >
              <FaPen />
            </IconButton>
          }
        />
        <Divider />
        <CardMedia className={classes.media}>
          <LocationSVG />
        </CardMedia>
        <Divider />
        <CardContent className={classes.address}>
          <h4>Address:</h4>
          <div>
            <Typography variant="subtitle1">{street}</Typography>
            <Typography variant="body1">
              {city}, {state}, {zip}
            </Typography>
          </div>
        </CardContent>
        <Divider />
        <CardContent className={classes.tenantInfo}>
          <h6 style={{ textAlign: 'center' }}>Status: {status}</h6>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate('tenant/add')}
          >
            Add Tenant
          </Button>
        </CardContent>
      </Card>
    </MuiModal>
  );
}

PropertyDetailsModal.propTypes = {
  property: PropTypes.oneOfType([
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      zip: PropTypes.string.isRequired,
      image: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.instanceOf(null).isRequired
      ])
    }),
    PropTypes.object.isRequired
  ]).isRequired,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
};
