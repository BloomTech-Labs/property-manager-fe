// React
import React, { useState } from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// Icons
import { FaPen } from 'react-icons/fa';
import AddIcon from '@material-ui/icons/Add';

// Redux
import { useSelector } from 'react-redux';

// Components
import PropertyCard from '../../../components/Properties/PropertyCard';
import AddPropertyCard from '../../../components/Properties/AddPropertyCard';
import LocationSVG from '../../../assets/svg/LocationSVG.svg';
import PropertyDetailsModal from '../../../components/Properties/PropertyDetailsModal';
import PropTable from './PropTable';
import AddButton from '../../../components/UI/IconButton';

export default function PropertyList() {
  // open/close state for modal
  const [openDetails, setOpenDetails] = useState(false);

  // store individual property from map function in local state
  const [currentProperty, setCurrentProperty] = useState({});

  // handle open/close, takes in the individual property
  // passed up from property card to gain access from the modal
  const handleOpen = property => {
    // sets the currentProperty state to the property object passed in
    setCurrentProperty(property);

    // this sets the open state for the PropertyDetailsModal
    setOpenDetails(true);
  };

  const handleClose = () => {
    // sets currentProperty to empty obj when modal is closed
    setCurrentProperty({});

    // sets the open state to false to close PropertyDetailsModal
    setOpenDetails(false);
  };

  // bring in loading state
  const loading = useSelector(state => state.propReducer.isGettingProperties);

  // bring in the errMsg from store to render error card
  const errMsg = useSelector(state => state.propReducer.errMsg);

  // bring in the list of properties from store
  const propertyList = useSelector(state => state.propReducer.properties);

  return (
    <div className="properties">
      <h1>Properties</h1>
      <Divider />
      <br />
      <AddButton
        url="/dashboard/properties/add"
        icon={<AddIcon />}
        text="Add New"
      />
      <PropTable />
      <Grid container spacing={3}>
        {propertyList.map(property => {
          // map over propertyList from state and render PropertyCards

          // pull out the ID (unique from DB) and name
          const { id, name } = property;

          return (
            <PropertyCard
              property={property || {}}
              handleOpen={handleOpen}
              iconPath={`/dashboard/properties/edit/${id}`}
              key={id}
              img={<img src={LocationSVG} alt="location of the property" />}
              title={name}
              icon={<FaPen />}
            />
          );
        })}
        <AddPropertyCard
          propertyNum={propertyList.length}
          isLoading={loading}
          error={errMsg}
        />
        <PropertyDetailsModal
          property={currentProperty}
          open={openDetails}
          close={handleClose}
        />
      </Grid>
    </div>
  );
}
