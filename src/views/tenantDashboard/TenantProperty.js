import React from 'react';
import { useSelector } from 'react-redux';
// MUI
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
// Icons
import PinDropIcon from '@material-ui/icons/PinDrop';
// Router
import { navigate } from '@reach/router';
// SVG
import LocationSVG from '../../components/SVG/LocationSVG';
// Components
import WorkOrderTable from '../../components/WorkOrders/WorkOrderTable';

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
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& button': {
      marginTop: theme.spacing(2)
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
  btn: {
    margin: theme.spacing(2)
  }
}));

export default function TenantProperty() {
  const classes = useStyles();

  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);

  const properties = useSelector(state => state.propReducer.properties);

  return (
    <Card className={classes.card}>
      {properties.map(property => {
        return (
          <>
            <CardHeader
              title={<h2 className={classes.title}>{property.name || null}</h2>}
            />
            <CardMedia className={classes.media}>
              <LocationSVG />
            </CardMedia>
            <Divider />
            <Grid justify="center" container>
              <CardContent className={classes.address}>
                <PinDropIcon />
                <div>
                  <Typography variant="body1">
                    {property.street || null}
                  </Typography>
                  <Typography variant="body1">
                    {property.city || null}, {property.state || null},{' '}
                    {property.zip || null}
                  </Typography>
                </div>
              </CardContent>
            </Grid>
          </>
        );
      })}
      <Divider />
      <CardContent className={classes.cardContent}>
        <h3 style={{ textAlign: 'center' }}>Work Orders:</h3>
        <WorkOrderTable workOrderList={workOrderList} />
        <Button
          className={classes.btn}
          color="primary"
          variant="contained"
          onClick={() => navigate('/dashboard/workorders/add')}
        >
          Add Work Order
        </Button>
      </CardContent>
    </Card>
  );
}
