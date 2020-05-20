import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Divider } from '@material-ui/core';
import TenantCard from '../../../components/Tenants/TenantCard';
import Searchbar from '../../../components/Searchbar/Searchbar';
import { getTenants } from '../../../store/actions';

const Tenants = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const tenants = useSelector(state => state.propReducer.tenants);
  const [searchResults, setSearchResults] = useState(tenants);

  useEffect(() => {
    dispatch(getTenants());
  }, [dispatch]);

  useEffect(() => {
    if (searchResults !== tenants) {
      const results = tenants.filter(
        query =>
          query.displayName.toLowerCase().includes(search.toLowerCase()) ||
          query.email.toLowerCase().includes(search.toLowerCase()) ||
          query.phoneNumber.toLowerCase().includes(search.toLowerCase()) ||
          query.unit_name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults([...results]);
    }
  }, [search, searchResults, tenants]);

  return (
    <div className="tenants">
      <div className="dashboardHeader">
        <h1>List of Tenants</h1>
        <Searchbar search={search} setSearch={setSearch} />
      </div>
      <Divider />
      <TenantCard searchResults={searchResults} tenants={tenants} />
    </div>
  );
};

export default Tenants;
