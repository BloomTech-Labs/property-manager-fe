import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function PropertyStatusChart({ propertyTotalArray }) {
  const propertyStatusInfo = {
    labels: ['Occupied', 'Vacant'],
    datasets: [
      {
        data: propertyTotalArray,
        backgroundColor: ['#6c63ff', '#777'],
        hoverBackgroundColor: ['#9f99ff', '#a1a1a1']
      }
    ]
  };
  const propertyStatusLegend = {
    display: true,
    position: 'bottom',
    fullWidth: false,
    reverse: false
  };
  return (
    <div className="property-status-card">
      <div className="property-status-chart">
        <h4 className="property-status-label">Property Status</h4>
        <Doughnut
          data={propertyStatusInfo}
          legend={propertyStatusLegend}
          options={{ rotation: 1 * Math.PI, circumference: 1 * Math.PI }}
        />
      </div>
    </div>
  );
}
