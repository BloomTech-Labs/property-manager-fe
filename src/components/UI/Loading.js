import React from 'react';
import { CircularProgress } from '@material-ui/core';

function Loading() {
  return (
    <div
      className="form-card"
      style={{ height: '500px', position: 'relative' }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <CircularProgress
          style={{
            height: '100px',
            width: '100px'
          }}
          color="secondary"
        />
      </div>
    </div>
  );
}

export default Loading;
