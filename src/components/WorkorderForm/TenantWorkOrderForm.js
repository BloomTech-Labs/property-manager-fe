/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

import {
  TextField,
  MenuItem,
  Paper,
  Grid,
  Button,
  CircularProgress,
  makeStyles
} from '@material-ui/core';
import { MdSend } from 'react-icons/md';

const useStyles = makeStyles(theme => ({
  formCard: {
    padding: theme.spacing(4)
  },
  formTitle: {
    marginBottom: theme.spacing(2)
  },
  textField: {
    width: '500px',
    maxWidth: '500px',
    margin: theme.spacing(2)
  },
  submitWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: theme.spacing(2)
  },
  submit: {}
}));

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Add a short description for your work order'),
  description: Yup.string().required('Add some details about your work order'),
  type: Yup.string().required('Work order type is required'),
  urgency: Yup.string().required('Must select a level of urgency')
});

export default function TenantWorkOrderForm({ submit }) {
  const classes = useStyles();

  return (
    <Paper className={classes.formCard}>
      <h2 className={classes.formTitle}>Create a Work Order</h2>
      <Formik
        enableReinitialize
        validationSchema={validationSchema}
        initalValues={{
          title: '',
          description: '',
          type: '',
          urgency: ''
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
        {({ errors, touched, isSubmitting }) => {
          // console.log(errors, touched, isSubmitting);

          return (
            <Form>
              <Grid container justify="space-evenly">
                <Field
                  className={classes.textField}
                  size="small"
                  margin="normal"
                  variant="outlined"
                  name="title"
                  type="text"
                  label="Title"
                  as={TextField}
                  helpertext={
                    errors.title
                      ? errors.title
                      : `Please enter a short description of your work order`
                  }
                  error={errors.title && true}
                />
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
                  name="type"
                  label="Type"
                  as={TextField}
                  select
                  helperText={
                    errors.type
                      ? errors.type
                      : 'Please select the type of problem you have'
                  }
                  error={errors.type && true}
                >
                  <MenuItem value="Plumbing">Plumbing</MenuItem>
                  <MenuItem value="Electrical">Electrical</MenuItem>
                  <MenuItem value="Pest Control">Pest Control</MenuItem>
                  <MenuItem value="Appliances">Appliances</MenuItem>
                  <MenuItem value="AC">HVAC</MenuItem>
                </Field>
                <Field
                  name="urgency"
                  label="Urgency"
                  as={TextField}
                  select
                  helperText={
                    errors.urgency
                      ? errors.urgency
                      : 'Please select a level of urgency for your problem'
                  }
                  error={errors.urgency && true}
                >
                  <MenuItem value="low">Low</MenuItem>
                  <MenuItem value="high">Medium</MenuItem>
                  <MenuItem value="medium">High</MenuItem>
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
}
