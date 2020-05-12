import React from 'react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MdEmail, MdLock, MdError, MdSupervisorAccount } from 'react-icons/md';
import { MenuItem, TextField } from '@material-ui/core';
import { useFirebase } from 'react-redux-firebase';
import { FormError, I, FormFooterContainer } from '../../UI';
import '../../../scss/components/_onboardingForms.scss';
import { showErrorToast } from '../../../store/actions/toastActions';
import axiosAuth from '../../../helpers/axiosAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email not valid')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters or longer')
    .required('Password is required'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  userType: Yup.string().required('Please select a user type')
});

const SignUpForm = () => {
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const signupFn = async values => {
    try {
      await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.SESSION);
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);
      if (res.user.uid) {
        axiosAuth
          .post('/auth/register', {
            email: values.email,
            type: values.userType,
            uid: res.user.uid
          })
          .then(() => {
            firebase.auth().currentUser.getIdToken(true);
          })
          .then(() => {
            firebase.updateProfile({
              refreshProfile: true
            });
          })
          .then(() => {
            navigate('/dashboard');
          });
      }
    } catch (err) {
      dispatch(showErrorToast(`${err}`));
    }
  };

  return (
    <div className="SignupForm">
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirmation: '',
          userType: ''
        }}
        validationSchema={validationSchema}
        onSubmit={values => signupFn(values)}
      >
        {({ touched, errors, values }) => (
          <div className="form-wrapper">
            <h2>Sign Up</h2>
            <Form className="form-element" data-testid="form-element">
              <div className="input-wrapper">
                <label htmlFor="email">
                  <I>
                    <MdEmail />
                  </I>{' '}
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <FormError>
                    <I>
                      <MdError />
                    </I>{' '}
                    {errors.email}
                  </FormError>
                )}
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">
                  <I>
                    <MdLock />
                  </I>{' '}
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <FormError>
                    <I>
                      <MdError />
                    </I>{' '}
                    {errors.password}
                  </FormError>
                )}
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">
                  <I>
                    <MdLock />
                  </I>{' '}
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Re-enter your password"
                  value={values.passwordConfirmation}
                />
                {touched.passwordConfirmation && errors.passwordConfirmation && (
                  <FormError>
                    <I>
                      <MdError />
                    </I>{' '}
                    {errors.passwordConfirmation}
                  </FormError>
                )}
              </div>
              <div className="input-wrapper">
                <label htmlFor="type">
                  <I>
                    <MdSupervisorAccount />
                  </I>{' '}
                  User Type
                </label>
                <Field
                  name="userType"
                  data-testid="userType"
                  label="Type"
                  as={TextField}
                  select
                >
                  <MenuItem value="landlord">Landlord</MenuItem>
                  <MenuItem value="tenant">Tenant</MenuItem>
                </Field>
                {touched.userType && errors.userType && (
                  <FormError>
                    <I>
                      <MdError />
                    </I>{' '}
                    {errors.type}
                  </FormError>
                )}
              </div>
              <div className="submit-btn-wrapper">
                <button className="btn" data-testid="submit-btn" type="submit">
                  Submit
                </button>
              </div>
              <FormFooterContainer>
                <button
                  type="button"
                  className="flip"
                  onClick={() => navigate('/login')}
                >
                  Have an Account?
                </button>
              </FormFooterContainer>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
