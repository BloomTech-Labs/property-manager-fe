/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import { getWorkOrderById } from '../../../store/actions';
import WorkOrderCard from './WorkOrderCard';
import WorkOrderButtons from './WorkOrderButtons';
import './workorder.scss';

function WorkOrder({ id }) {
  const dispatch = useDispatch();
  const workOrders = useSelector(state => state.workOrderReducer.workOrders[0]);

  const formatDate = date => date && new Date(date).toDateString();

  useEffect(() => {
    dispatch(getWorkOrderById(id));
  }, [dispatch, id]);

  return (
    <div className="wo-wrapper" key={id}>
      <h1 className="wo-heading"> WorkOrder: {workOrders.name} </h1>
      <WorkOrderCard workOrders={workOrders} />
      <div className="wo-card-wrapper">
        <div className="wo-card">
          <div className="card-heading">
            <h5>Current Status:</h5>
          </div>
          <div className="card-content">
            <h3>{workOrders.status}</h3>
          </div>
        </div>
        <Divider orientation="vertical" />
        <div className="wo-card">
          <div className="card-heading">
            <h5>Additional Comments:</h5>
          </div>
          <div className="card-content">
            <h3>{workOrders.comment}</h3>
          </div>
        </div>
      </div>
      <div className="wo-card-wrapper">
        <div className="wo-card">
          <div className="card-heading">
            <h5>Start Date:</h5>
          </div>
          <div className="card-content">
            <h3>{formatDate(workOrders.start_date)}</h3>
          </div>
        </div>
        <Divider orientation="vertical" />
        <div className="wo-card">
          <div className="card-heading">
            <h5>Update Date:</h5>
          </div>
          <div className="card-content">
            <h3>{formatDate(workOrders.update_date)}</h3>
          </div>
        </div>
      </div>
      <div className="wo-card-wrapper">
        <div className="wo-card">
          <div className="card-heading">
            <h5>Type of Workorder:</h5>
          </div>
          <div className="card-content">
            <h3>{workOrders.type}</h3>
          </div>
        </div>
        <Divider orientation="vertical" />
        <div className="wo-card">
          <div className="card-heading">
            <h5>Requested By:</h5>
          </div>
          <div className="card-content">
            <h3>{workOrders.user_id}</h3>
          </div>
        </div>
      </div>
      <WorkOrderButtons id={id} />
    </div>
  );
}

WorkOrder.propTypes = {
  id: PropTypes.string.isRequired
};

export default WorkOrder;
