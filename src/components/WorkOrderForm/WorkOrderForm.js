import React from 'react';
import { navigate } from '@reach/router';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';

// MUI Components
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MdSend } from 'react-icons/md';
import { formStyles } from '../../helpers/utils';

// Redux Actions
import { addWorkOrder, getWorkOrders } from '../../store/actions/index';
import { workOrderValidation } from './WorkOrderValidation';

const WorkOrderForm = () => {
  const classes = formStyles();
  const dispatch = useDispatch();
  const currentDate = new Date();

  // Submit Fn
  const submit = values => {
    dispatch(addWorkOrder(values)).then(() =>
      dispatch(getWorkOrders()).then(() => navigate('/dashboard/workorders'))
    );
  };

  // Subscribe to user state
  const user = useSelector(state => state.firebase.auth);

  // Bring in property list for the landlord form
  const propertyList = useSelector(state => state.propReducer.properties);

  return (
    <Paper className={classes.formCard}>
      <h2 className={classes.formTitle}>Create a Work Order</h2>
      <Formik
        enableReinitialize
        validationSchema={workOrderValidation}
        initialValues={{
          name: '',
          unit_id: '',
          description: '',
          type: '',
          start_date: currentDate,
          end_date: currentDate,
          status: 'In Progress',
          user_id: user.uid,
          comment: '',
          in_house: true
        }}
        resetForm
        onSubmit={values => {
          return new Promise(resolve => {
            setTimeout(() => {
              submit(values);
              resolve();
            }, 2000);
          });
        }}
      >
        {({ errors, isSubmitting }) => {
          return (
            <Form>
              <Grid container justify="space-evenly">
                <Field
                  className={classes.textField}
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="name"
                  type="text"
                  label="Name"
                  as={TextField}
                />
                <Field
                  className={classes.textField}
                  name="unit_id"
                  label="Property"
                  size="small"
                  margin="normal"
                  variant="outlined"
                  as={TextField}
                  select
                  helperText={
                    errors.unit_id ? errors.unit_id : 'Please select a property'
                  }
                  error={errors.unit_id && true}
                >
                  {propertyList.map(property => (
                    <MenuItem key={property.id} value={property.id}>
                      {property.name}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  className={classes.textField}
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="description"
                  type="text"
                  label="Description"
                  as={TextField}
                  helperText={
                    errors.description
                      ? errors.description
                      : 'Please enter some details about your work order'
                  }
                  error={errors.description && true}
                />
                <Field
                  className={classes.textField}
                  name="type"
                  label="Order Type"
                  size="small"
                  margin="normal"
                  variant="outlined"
                  as={TextField}
                  select
                  helperText={
                    errors.type
                      ? errors.type
                      : 'Please select the type of problem you have'
                  }
                  error={errors.type && true}
                >
                  <MenuItem value="plumbing">Plumbing</MenuItem>
                  <MenuItem value="electrical">Electrical</MenuItem>
                  <MenuItem value="pest control">Pest Control</MenuItem>
                  <MenuItem value="appliances">Appliances</MenuItem>
                  <MenuItem value="HVAC">HVAC</MenuItem>
                </Field>
                <div className={classes.submitWrapper}>
                  <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    className={classes.submit}
                    disabled={isSubmitting}
                    type="submit"
                    endIcon={
                      isSubmitting ? (
                        <CircularProgress
                          style={{
                            height: '22px',
                            width: '22px',
                            marginRight: '4px'
                          }}
                        />
                      ) : (
                        <MdSend />
                      )
                    }
                  >
                    Submit
                  </Button>
                </div>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Paper>
  );
};

export default WorkOrderForm;
