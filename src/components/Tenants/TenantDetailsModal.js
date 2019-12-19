import React from 'react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';

// MUI
// Styles
import { makeStyles } from '@material-ui/core/styles';

// Components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

// Icons
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';

// SVG
import { Grid } from '@material-ui/core';
import ProfileSVG from '../SVG/ProfileSVG';

// Components
import MuiModal from '../UI/MuiModal';

// Actions
import { getTenantById } from '../../store/actions';

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
    padding: theme.spacing(2),
    display: 'flex',
    '& svg': {
      height: 140
    }
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& div': {
      '& div': {
        display: 'flex',
        marginTop: theme.spacing(1),
        '& svg': {
          marginRight: theme.spacing(2)
        }
      }
    }
  },
  propertyInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& button': {
      marginTop: theme.spacing(2)
    }
  },
  propertyDetails: {
    marginTop: theme.spacing(1),
    '& svg': {
      fontSize: '3rem',
      marginRight: theme.spacing(2)
    }
  }
}));

const TenantDetailsModal = ({ open, close, tenant, property }) => {
  // bring in access to custom styling
  const classes = useStyles();

  return (
    <MuiModal open={open} close={close}>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              <PersonIcon />
            </Avatar>
          }
          title={
            <h4 className={classes.title}>
              {tenant.firstName} {tenant.lastName}
            </h4>
          }
          action={
            <IconButton
              onClick={() => navigate(`tenants/edit/${tenant.id}`)}
              aria-label="edit"
            >
              <EditIcon />
            </IconButton>
          }
        />
        <Divider />
        <CardMedia className={classes.media}>
          <ProfileSVG />
        </CardMedia>
        <Divider />
        <CardContent className={classes.contactInfo}>
          <h5>Contact Info</h5>
          <div>
            <div>
              <EmailIcon />
              <Typography variant="body2">{tenant.email}</Typography>
            </div>
            <div>
              <PhoneIcon />
              <Typography variant="body2">{tenant.phone}</Typography>
            </div>
          </div>
        </CardContent>
        <Divider />
        <CardContent className={classes.propertyInfo}>
          <h5>Property Information</h5>

          <div>
            <Grid
              alignItems="center"
              container
              className={classes.propertyDetails}
            >
              <HomeIcon />
              <div>
                <h6>{property.name}</h6>
                <Typography variant="body2">{property.street}</Typography>
                <Typography variant="body2">
                  {property.city}, {property.state}, {property.zip}
                </Typography>
              </div>
            </Grid>
          </div>
          <Button
            color="primary"
            variant="contained"
            onClick={() => navigate(`property/${property.id}`)}
          >
            View Property
          </Button>
        </CardContent>
      </Card>
    </MuiModal>
  );
};

export default TenantDetailsModal;
