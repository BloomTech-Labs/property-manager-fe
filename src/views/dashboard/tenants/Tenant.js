/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { getTenantById } from '../../../store/actions';
import TenantImg from '../../../assets/img/person-icon-1675.png';

export default function Tenant({ id }) {
  const dispatch = useDispatch();

  const { currentTenant = {} } = useSelector(state => state.propReducer);

  React.useEffect(() => {
    dispatch(getTenantById(id));
  }, [dispatch, id]);

  const {
    displayName,
    email,
    phoneNumber,
    lease_start,
    lease_end
  } = currentTenant;

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={TenantImg} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Name: {displayName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Email: {email}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Phone: {phoneNumber}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  Lease Duration: {lease_start} - {lease_end}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
