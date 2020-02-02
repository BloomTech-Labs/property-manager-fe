import React from 'react';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';
import UnderConstructionSVG from '../../../components/SVG/UnderConstructionSVG';

export default function Overview() {
  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);
  const workOrderTyeps = [];
  const wotypesNoArray = [];
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
    if (workOrderTyeps.includes('hvac')) {
      const orderTypeTotal = workOrderTyeps.filter(data => data === 'hvac')
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
  const data = {
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
  return (
    <div className="overview">
      <h2 style={{ textAlign: 'center' }}>
        More overview modules are coming soon...
      </h2>
      {workOrderList.length > 0 ? (
        <div className="work-order-chart">
          <h4>Work Orders per Type</h4>
          <Doughnut data={data} legend={legendOpt} />
        </div>
      ) : (
        <>No Work order </>
      )}

      <UnderConstructionSVG />
    </div>
  );
}
