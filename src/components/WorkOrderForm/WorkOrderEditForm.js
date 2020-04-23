/* eslint-disable camelcase */
import React from 'react';
import { navigate } from '@reach/router';
// Redux
import { useSelector, useDispatch } from 'react-redux';

// Formik & Yup
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// MUI Components
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MdSend } from 'react-icons/md';
import { formStyles } from '../../helpers/utils';

// Icons

// Redux Actions
import { getWorkOrders, updateWorkOrder } from '../../store/actions/index';

// YUP Validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required('Add a short description for your work order'),
  unit_id: Yup.string().required('Select a property'),
  description: Yup.string().required('Add some details about your work order'),
  comment: Yup.string(),
  type: Yup.string().required('Workorder type is required'),
  status: Yup.string().required('Update the status of the workorder.')
});
// FIXME: these props are undefined
// eslint-disable-next-line
const WorkOrderForm = ({ workOrderId }, props) => {
  const classes = formStyles();
  const dispatch = useDispatch();

  // Fetch work orders on page load, this way if a user deep routes directly to the page, it will
  // still have the data
  const currentDate = new Date();

  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);
  const workOrder = workOrderList.find(item => `${item.id}` === workOrderId);
  const {
    name,
    unit_id,
    status,
    user_id,
    comment,
    end_date,
    description,
    type,
    start_date,
    id,
    in_house
  } = workOrder;

  // Submit Fn
  const submit = values => {
    dispatch(updateWorkOrder(values)).then(() =>
      dispatch(getWorkOrders()).then(() => navigate('/dashboard/workorders'))
    );
  };

  // Bring in property list for the landlord form
  const propertyList = useSelector(state => state.propReducer.properties);

  return (
    <Paper className={classes.formCard}>
      <h2 className={classes.formTitle}>Update Work Order</h2>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initialValues={{
          name,
          unit_id,
          description,
          type,
          start_date,
          id,
          user_id,
          end_date: currentDate,
          status,
          comment: '',
          in_house
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
                  size="small"
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                  name="unit_id"
                  label="Property"
                  as={TextField}
                  select
                  helperText={
                    errors.property
                      ? errors.property
                      : 'Please select a property'
                  }
                  error={errors.property && true}
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
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="comment"
                  type="text"
                  label="Additional Comments"
                  as={TextField}
                  helperText={
                    errors.comment
                      ? errors.comment
                      : 'Please enter any additional comments about the current status of the repair.'
                  }
                  error={errors.comment && true}
                />
                <Field
                  size="small"
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                  name="type"
                  label="Order Type"
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
                <Field
                  size="small"
                  margin="normal"
                  variant="outlined"
                  className={classes.textField}
                  name="status"
                  label="Status Update"
                  as={TextField}
                  select
                  helperText={
                    errors.status
                      ? errors.status
                      : 'Please select a status update.'
                  }
                  error={errors.status && true}
                >
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Still Working">Still Working</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
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
