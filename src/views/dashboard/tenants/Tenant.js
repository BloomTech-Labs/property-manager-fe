import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Card } from '@material-ui/core';
import { getTenantById } from '../../../store/actions';

// eslint-disable-next-line react/prop-types
export default function Tenant({ id }) {
  const dispatch = useDispatch();

  const { currentTenant = {} } = useSelector(state => state.propReducer);

  React.useEffect(() => {
    dispatch(getTenantById(id));
  }, [dispatch, id]);

  const useStyles = makeStyles({
    container: {
      minWidth: '65vw'
    },
    card: {
      minWidth: '100%'
    },
    header: {
      fontSize: '2rem'
    },
    body: {
      minWidth: '80%'
    }
  });
  console.log(`Current Tenant!!`, currentTenant);

  const classes = useStyles();
  const { firstName, lastName, email, phone, type } = currentTenant;

  return (
    <Paper className={classes.container}>
      <Card className={classes.card} variant="outlined">
        <section className={classes.header}>
          {firstName} {lastName} ({type})
        </section>

        <section className={classes.body}>
          <h5>{email}</h5>
          <h5>{phone}</h5>
        </section>
      </Card>
    </Paper>
  );
}
