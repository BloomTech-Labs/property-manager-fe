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
// Icons
import PinDropIcon from '@material-ui/icons/PinDrop';
// Router
import { navigate } from '@reach/router';
import { modalStyles } from '../../helpers/utils';
// SVG
import LocationSVG from '../../assets/svg/LocationSVG.svg';
// Components
import WorkOrderTable from '../../components/WorkOrders/WorkOrderTable';

export default function TenantProperty() {
  const classes = modalStyles();

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
