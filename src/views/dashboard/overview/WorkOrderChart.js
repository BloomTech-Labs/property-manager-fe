import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import legendOptions from './legendOptions';

export default function WorkOrderChart({ workOrderTotalArray }) {
  const workOrderdata = {
    labels: ['Electrical', 'Plumbing', 'Pest Control', 'Appliances', 'HVAC'],
    datasets: [
      {
        data: workOrderTotalArray,
        backgroundColor: [
          '#FEE440',
          '#595457',
          '#710627',
          '#00F5D4',
          '#DE0D92'
        ],
        hoverBackgroundColor: [
          '#fff2a3',
          '#a1979d',
          '#a84c68',
          '#91faeb',
          '#fa75ca'
        ]
      }
    ]
  };
  return <Doughnut data={workOrderdata} legend={legendOptions} />;
}
