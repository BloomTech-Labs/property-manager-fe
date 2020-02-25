import React from 'react';
import { useSelector } from 'react-redux';
import { Bar, Doughnut } from 'react-chartjs-2';

export default function Overview() {
  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);
  const propertyList = useSelector(state => state.propReducer.properties);
  const workOrderTyeps = [];
  const wotypesNoArray = [];
  const propertyStatus = [];
  const proStausNoArray = [];

  // get data from work orders create the chart
  if (workOrderList.length > 0) {
    // eslint-disable-next-line array-callback-return
    workOrderList.map(order => {
      workOrderTyeps.push(order.type);
    });

    if (workOrderTyeps.includes('electrical')) {
      const orderTypeTotal = workOrderTyeps.filter(
        data => data === 'electrical'
      ).length;
      wotypesNoArray.push(orderTypeTotal);
    } else {
      wotypesNoArray.push(0);
    }

    if (workOrderTyeps.includes('plumbing')) {
      const orderTypeTotal = workOrderTyeps.filter(data => data === 'plumbing')
        .length;
      wotypesNoArray.push(orderTypeTotal);
    } else {
      wotypesNoArray.push(0);
    }
    if (workOrderTyeps.includes('pest control')) {
      const orderTypeTotal = workOrderTyeps.filter(
        data => data === 'pest control'
      ).length;
      wotypesNoArray.push(orderTypeTotal);
    } else {
      wotypesNoArray.push(0);
    }
    if (workOrderTyeps.includes('appliances')) {
      const orderTypeTotal = workOrderTyeps.filter(
        data => data === 'appliances'
      ).length;
      wotypesNoArray.push(orderTypeTotal);
    } else {
      wotypesNoArray.push(0);
    }
    if (workOrderTyeps.includes('HVAC')) {
      const orderTypeTotal = workOrderTyeps.filter(data => data === 'HVAC')
        .length;
      wotypesNoArray.push(orderTypeTotal);
    } else {
      wotypesNoArray.push(0);
    }
  }

  const legendOpt = {
    display: true,
    position: 'right',
    fullWidth: false,
    reverse: false
  };
  const options = {
    responsive: true,
    tooltips: {
      mode: 'label'
    },
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            display: false
          },
          labels: {
            show: true
          },
          ticks: {
            min: 0
          }
        }
      ]
    }
  };
  const workOrderdata = {
    labels: ['Electrical', 'Plumbing', 'Pest Control', 'Appliances', 'HVAC'],
    datasets: [
      {
        data: wotypesNoArray,
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

  // get property list and create the chart
  if (propertyList.length > 0) {
    // eslint-disable-next-line array-callback-return
    propertyList.map(property => {
      propertyStatus.push(property.status);
    });
    if (propertyStatus.length > 0) {
      const propertyTotal = propertyStatus.length;
      proStausNoArray.push(propertyTotal);
    }
    if (propertyStatus.includes('occupied')) {
      const propertyTotal = propertyStatus.filter(data => data === 'occupied')
        .length;
      proStausNoArray.push(propertyTotal);
    } else {
      proStausNoArray.push(0);
    }
    if (propertyStatus.includes('vacant')) {
      const propertyTotal = propertyStatus.filter(data => data === 'vacant')
        .length;
      proStausNoArray.push(propertyTotal);
    } else {
      proStausNoArray.push(0);
    }
  }
  const propertyStatusdata = {
    labels: ['Total', 'Occupied', 'Vacant'],
    datasets: [
      {
        label: 'Property Status',
        backgroundColor: '#595959',
        borderColor: '#0d0d0d',
        borderWidth: 1.2,
        hoverBackgroundColor: '#bfbfbf',
        hoverBorderColor: '#666666',
        borderDashOffset: 0.0,
        yAxisID: 'y-axis-1',
        data: proStausNoArray
      }
    ]
  };
  return (
    <div className="overview">
      <h2 style={{ textAlign: 'center' }}>
        More overview modules are coming soon...
      </h2>
      {propertyList.length > 0 ? (
        <div className="work-order-chart">
          <h4>Property Status</h4>
          <Bar
            data={propertyStatusdata}
            width={100}
            height={50}
            legend={legendOpt}
            options={options}
          />
        </div>
      ) : (
        <h5>No Property </h5>
      )}
      {workOrderList.length > 0 ? (
        <div className="work-order-chart">
          <h4>Work Orders per Type</h4>
          <Doughnut data={workOrderdata} legend={legendOpt} />
        </div>
      ) : (
        <h5>No Work order </h5>
      )}
    </div>
  );
}
