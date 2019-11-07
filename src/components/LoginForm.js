// import React from 'react';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import FormErrors from './FormErrors';

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('Must be a valid email address')
//     .max(255, 'Email entered was too long')
//     .required('Must enter an Email'),
//   password: Yup.string()
//     .min(8, 'Password must be at least 8 characters')
//     .max(40, 'Password must be shorter than 40')
//     .required('Must enter a Pass')
// });

// export default function LoginForm() {
//   return (
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validationSchema={validationSchema}
//       onSubmit={(values, { setSubmitting, resetForm }) => {
//         setSubmitting(true);

//         // SECTION send values to backend then reset the form and reset submission state
//         resetForm();
//         setSubmitting(false);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email">
//               Email:
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 placeholder="Enter your Email Address"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.email}
//                 className={touched.email && errors.email ? 'has-error' : null}
//               />
//             </label>
//             <FormErrors touched={touched.email} message={errors.email} />
//           </div>
//           <div>
//             <label htmlFor="password">
//               Password:
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 placeholder="Enter your Password"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.password}
//                 className={
//                   touched.password && errors.password ? 'has-error' : null
//                 }
//               />
//             </label>
//             <FormErrors touched={touched.password} message={errors.password} />
//           </div>
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   );
// }

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FormErrors from './FormErrors';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email address')
    .max(255, 'Email entered was too long')
    .required('Must enter an Email'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(40, 'Password must be shorter than 40')
    .required('Must enter a Pass')
});

export default function LoginForm() {
  const submitFn = values => console.log(values);

  const {
    isSubmitting,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: submitFn
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Email Address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={touched.email && errors.email ? 'has-error' : null}
          />
        </label>
        <FormErrors touched={touched.email} message={errors.email} />
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={touched.password && errors.password ? 'has-error' : null}
          />
        </label>
        <FormErrors touched={touched.password} message={errors.password} />
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
}
