// React
import React, { useState } from 'react';

// MUI
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

// Edit Icon
import { FaPen } from 'react-icons/fa';

// Redux
import { useSelector } from 'react-redux';

// Components
import PropertyCard from '../../../components/Properties/PropertyCard';
import AddPropertyCard from '../../../components/Properties/AddPropertyCard';
import LocationSVG from '../../../components/SVG/LocationSVG';
import PropertyDetailsModal from '../../../components/Properties/PropertyDetailsModal';

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
      <h1>List of Properties</h1>
      <Divider />
      <br />

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
              svg={<LocationSVG />}
              title={name}
              icon={<FaPen />}
            />
          );
        })}

        {(() => {
          // IIFE for multi-condition rendering
          if (propertyList.length > 0) {
            // there are properties - don't display placeholders
            return null;
          }
          if (propertyList.length === 0 && loading === false) {
            // no properties yet - don't display placeholders
            return null;
          }
          return (
            // loading is still true display placeholders
            <>
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
              <PropertyCard />
            </>
          );
        })()}
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
