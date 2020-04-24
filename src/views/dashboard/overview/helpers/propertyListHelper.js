export default function propertyListHelper(propertyList) {
  const propertyCount = [];
  if (propertyList.length > 0) {
    const occupied = propertyList.filter(prop => prop.occupied !== 0).length;
    const notOccupied = propertyList.filter(prop => prop.occupied === 0).length;
    propertyCount.push(occupied);
    propertyCount.push(notOccupied);
    return propertyCount;
  }
  return propertyCount;
}
