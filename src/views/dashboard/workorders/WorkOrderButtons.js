/* eslint-disable react/prop-types */
import React from 'react';
import { navigate } from '@reach/router';

function WorkOrderButtons({ id }) {
  return (
    <div className="wo-buttons-wrapper">
      <button
        type="submit"
        className="wo-btn"
        onClick={() => navigate('/upload')}
      >
        Add Media
      </button>
      <button
        type="submit"
        className="wo-btn"
        onClick={() => navigate(`/dashboard/workordersedit/${id}`)}
      >
        Update
      </button>
    </div>
  );
}

export default WorkOrderButtons;
