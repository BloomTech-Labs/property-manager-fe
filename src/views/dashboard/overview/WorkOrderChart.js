import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function WorkOrderChart({ workOrderTotalArray }) {
  const workOrderdata = {
    labels: ['Electrical', 'Plumbing', 'Pest Control', 'Appliances', 'HVAC'],
    datasets: [
      {
        data: workOrderTotalArray,
        backgroundColor: [
          '#ff3333',
          '#0066ff',
          '#ffff1a',
          '#4dff88',
          '#ff751a'
        ],
        hoverBackgroundColor: [
          '#ffb3b3',
          '#80b3ff',
          '#ffff99',
          '#ccffdd',
          '#ffd1b3'
        ]
      }
    ]
  };
  const legendOpt = {
    display: true,
    position: 'bottom',
    fullWidth: false,
    reverse: false
  };
  return <Doughnut data={workOrderdata} legend={legendOpt} />;
}
