function mapWorkOrdersToArray(arrayFromSelector) {
  const workOrderTypes = [];
  const workOrderTotalArray = [];
  if (arrayFromSelector.length > 0) {
    arrayFromSelector.map(order => {
      workOrderTypes.push(order.type);
    });
    ['electrical', 'plumbing', 'pest control', 'appliances', 'HVAC'].forEach(
      type => {
        if (workOrderTypes.includes(type)) {
          const orderTypeTotal = workOrderTypes.filter(data => data === type)
            .length;
          workOrderTotalArray.push(orderTypeTotal);
        }
      }
    );
    return workOrderTotalArray;
  }
  return workOrderTotalArray;
}

export default mapWorkOrdersToArray;
