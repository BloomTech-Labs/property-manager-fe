import React, { useState } from 'react';
import { navigate } from '@reach/router';
import { useDispatch } from 'react-redux';
import {
  addWorkOrder,
  getWorkOrders,
  updateWorkOrder
} from '../../store/actions/index';
import SubmitButton from '../Buttons/SubmitButton';
import { formStyles } from '../../helpers/utils';

function NewForm() {
  const classes = formStyles();
  const currentDate = new Date();
  const dispatch = useDispatch();
  const isEditing = false;
  const [initialValues, setInitialValues] = useState({
    name: '',
    unit_id: '',
    description: '',
    type: '',
    start_date: currentDate,
    end_date: currentDate,
    status: 'In Progress',
    user_id: user.id,
    comment: '',
    in_house: true
  });

  const handleSubmit = values => {
    if (!isEditing) {
      dispatch(addWorkOrder(values)).then(() =>
        dispatch(getWorkOrders()).then(() => navigate('/dashboard/workorders'))
      );
    } else {
      dispatch(updateWorkOrder(values)).then(() =>
        dispatch(getWorkOrders()).then(() => navigate('/dashboard/workorders'))
      );
    }
  };

  const handleChanges = e => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={classes.formCard}>
      <h2 className={classes.formTitle}>
        {!isEditing ? 'Create Work Order' : 'Update Work Order'}
      </h2>
      <form className="woForm" onSubmit={handleSubmit}>
        <input
          className={classes.textField}
          type="text"
          name="name"
          placeholder="Name"
          value={initialValues.name}
          onChange={handleChanges}
          required
        />
        <input
          className={classes.textField}
          type="text"
          name="description"
          placeholder="Description"
          value={initialValues.description}
          onChange={handleChanges}
          required
        />
        <input
          className={classes.textField}
          type="text"
          name="comment"
          placeholder="Addition comments"
          value={initialValues.comment}
          onChange={handleChanges}
          required
        />
        <SubmitButton />
      </form>
    </div>
  );
}

export default NewForm;
