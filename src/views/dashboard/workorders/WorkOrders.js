import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import { Divider } from '@material-ui/core';
import WorkOrderTable from '../../../components/WorkOrders/WorkOrderTable';
import IconButton from '../../../components/UI/IconButton';
import { getWorkOrders } from '../../../store/actions';
import Searchbar from '../../../components/Searchbar/Searchbar';

export default function WorkOrders() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const workOrderList = useSelector(state => state.workOrderReducer.workOrders);
  const [searchResults, setSearchResults] = useState(workOrderList);

  useEffect(() => {
    dispatch(getWorkOrders());
  }, [dispatch]);

  useEffect(() => {
    if (searchResults !== workOrderList) {
      const results = workOrderList.filter(
        query =>
          query.name.toLowerCase().includes(search.toLowerCase()) ||
          query.type.toLowerCase().includes(search.toLowerCase()) ||
          query.status.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults([...results]);
    }
    /* eslint-disable-next-line */
  }, [search, workOrderList]);

  return (
    <div className="work-orders">
      <div className="dashboardHeader">
        <h1>Work Orders</h1>
        <Searchbar search={search} setSearch={setSearch} />
      </div>
      <Divider />
      <IconButton
        url="/dashboard/workorders/add"
        icon={<AddIcon />}
        text="Add New"
      />
      <WorkOrderTable
        searchResults={searchResults}
        workOrderList={workOrderList}
      />
    </div>
  );
}
