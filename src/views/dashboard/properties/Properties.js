// React
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// MUI
import Divider from '@material-ui/core/Divider';
// Icons
import AddIcon from '@material-ui/icons/Add';
// Components
import PropTable from './PropTable';
import IconButton from '../../../components/UI/IconButton';
import Searchbar from '../../../components/Searchbar/Searchbar';
import { getProperties } from '../../../store/actions/properties/propertyCreators';

export default function PropertyList() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const properties = useSelector(state => state.propReducer.properties);
  const [searchResults, setSearchResults] = useState(properties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);

  useEffect(() => {
    if (searchResults !== properties) {
      const results = properties.filter(
        query =>
          query.name.toLowerCase().includes(search.toLowerCase()) ||
          query.street_address.toLowerCase().includes(search.toLowerCase()) ||
          query.city.toLowerCase().includes(search.toLowerCase()) ||
          query.state.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults([...results]);
    }
  }, [search, properties, searchResults]);

  return (
    <div className="properties">
      <div className="dashboardHeader">
        <h1>Properties</h1>
        <Searchbar search={search} setSearch={setSearch} />
      </div>
      <Divider />
      <br />
      <IconButton
        url="/dashboard/properties/add"
        icon={<AddIcon />}
        text="Add New"
      />
      <PropTable searchResults={searchResults} properties={properties} />
    </div>
  );
}
