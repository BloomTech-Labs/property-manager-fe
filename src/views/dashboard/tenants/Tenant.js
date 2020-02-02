import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// MUI
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

// Icons
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/PhoneAndroid';

// Components
import { navigate } from '@reach/router';
import { Button, Grid, CardMedia } from '@material-ui/core';
import LocationSVG from '../../../components/SVG/LocationSVG';
import { getTenantById } from '../../../store/actions';

// Define styling for modal
const useStyles = makeStyles(theme => ({
  card: {
    width: '100%'
  },
  title: {
    textAlign: 'center',
    margin: 0,
    lineHeight: 1
  },
  avatar: {
    backgroundColor: '#2d3b4f'
  },
  media: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      height: 140
    }
  },
  address: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      fontSize: '4rem'
    },
    '& svg': {
      fontSize: '3rem',
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
  list: {
    padding: theme.spacing(0, 4)
  },
  listItem: {
    minWidth: '300px'
  },
  actionIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {}
}));

// eslint-disable-next-line react/prop-types
export default function Tenant({ id }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { currentTenant = {} } = useSelector(state => state.propReducer);

  React.useEffect(() => {
    dispatch(getTenantById(id));
  }, [dispatch, id]);

  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <h2 className={classes.title}>
            {currentTenant.firstName} {currentTenant.lastName}
          </h2>
        }
      />
      <CardMedia className={classes.media}>
        <LocationSVG />
      </CardMedia>
      <Divider />
      <Grid justify="center" container>
        <CardContent className={classes.contactInfo}>
          <h5>Contact Info</h5>
          <div>
            <div>
              <EmailIcon />
              <Typography variant="body2">{currentTenant.email}</Typography>
            </div>
            <div>
              <PhoneIcon />
              <Typography variant="body2">{currentTenant.phone}</Typography>
            </div>
          </div>
        </CardContent>
      </Grid>
      <Divider />
      <CardContent className={classes.tenantInfo}>
        <Button
          className={classes.btn}
          color="primary"
          variant="contained"
          onClick={() =>
            navigate(`/dashboard/properties/${currentTenant.residenceId}`)
          }
        >
          View Property
        </Button>
      </CardContent>
    </Card>
  );
}
