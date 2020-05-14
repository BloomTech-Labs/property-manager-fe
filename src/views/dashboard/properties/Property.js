/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
// MUI
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CardMedia from '@material-ui/core/CardMedia';
// Icons
import PinDropIcon from '@material-ui/icons/PinDrop';
import AddIcon from '@material-ui/icons/Add';
// Router
import { navigate } from '@reach/router';
import { modalStyles } from '../../../helpers/utils';
// Sample Photo
import sampleHome from '../../../assets/img/sample_home.jpg';
import PersonIcon from '@material-ui/icons/Person';
// Components
import WorkOrderTable from '../../../components/WorkOrders/WorkOrderTable';
import IconButton from '../../../components/UI/IconButton';
// Actions
import { getProperty, getTenantsByResidence } from '../../../store/actions';

export default function Property({ id }, user) {
  const classes = modalStyles();

  const dispatch = useDispatch();

  const property = useSelector(state => state.propReducer.property);
  const tenants = useSelector(
    state => state.propReducer.currentPropertyTenants
  );

  console.log(tenants);
  console.log(id);
  console.log(user);

  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);

  const filterWorkOrders = workOrderList.filter(
    workOrder => workOrder.unit_id === property.id
  );
  // eslint-disable-next-line no-unused-vars
  const { name, street_address, city, state, zip, occupied } = property;

  React.useEffect(() => {
    dispatch(getProperty(id));
    dispatch(getTenantsByResidence(id));
  }, [dispatch, id]);

  if (id) {
    return (
      <Card className={classes.card}>
        <CardHeader title={<h2 className={classes.title}>{name || null}</h2>} />
        <CardMedia className={classes.media}>
          <img src={sampleHome} alt="Location of property" />
        </CardMedia>
        <Divider />
        <Grid justify="center" container>
          <CardContent className={classes.address}>
            <PinDropIcon />
            <div>
              <Typography variant="body1">{street_address}</Typography>
              <Typography variant="body1">
                {city}, {state}, {zip}
              </Typography>
            </div>
          </CardContent>
        </Grid>
        <Divider />
        <CardContent className={classes.cardContent}>
          <h3 style={{ textAlign: 'center' }}>Tenants:</h3>
          <div>
            {tenants.length === 0 && <h5>No tenants for this property.</h5>}
            <List className={classes.list}>
              {tenants &&
                tenants.map(tenant => {
                  return (
                    <React.Fragment key={tenant.id}>
                      <Divider />
                      <ListItem
                        button
                        className={classes.listItem}
                        onClick={() =>
                          navigate(`/dashboard/tenants/${tenant.id}`)
                        }
                      >
                        <ListItemIcon>
                          <PersonIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={`${tenant.firstName} ${tenant.lastName}`}
                        />
                      </ListItem>
                    </React.Fragment>
                  );
                })}
            </List>
          </div>
          <IconButton
            url="/dashboard/tenants/add"
            icon={<AddIcon />}
            text="Add Tenant"
          />
        </CardContent>
        <Divider />
        <CardContent className={classes.cardContent}>
          <h3 style={{ textAlign: 'center' }}>Work Orders:</h3>
          <WorkOrderTable workOrderList={filterWorkOrders} />
          <IconButton
            url="/dashboard/workorders/add"
            icon={<AddIcon />}
            text="Add Work Order"
          />
        </CardContent>
      </Card>
    );
  }

  return navigate('/dashboard');
}
Property.propTypes = {
  id: PropTypes.string.isRequired
};
