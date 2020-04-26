import * as Yup from 'yup';

export const workOrderValidation= Yup.object().shape({
  name: Yup.string().required('Add a short description for your work order'),
  unit_id: Yup.string().required('Select a property'),
  description: Yup.string().required('Add some details about your work order'),
  type: Yup.string().required('Work order type is required')
});