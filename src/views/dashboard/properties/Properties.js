/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
// UI
import { Grid, Divider } from '@material-ui/core';
// Components
import { FaPen } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import PropertyCard from '../../../components/Properties/PropertyCard';
import AddPropertyCard from '../../../components/Properties/AddPropertyCard';
import LocationSVG from '../../../components/SVG/LocationSVG';
// edit icon
// Redux
// bring in state and dispatch
// bring in action
import { getProperties } from '../../../store/actions';

export default function PropertyList() {
  // setup dispatch
  const dispatch = useDispatch();

  // local state to handle loading state to render placeholder
  const [loading, setLoading] = useState(true);

  // bring in the errMsg from store to render error card
  const errMsg = useSelector(state => state.propReducer.errMsg);

  // bring in the list of properties from store
  const propertyList = useSelector(state => state.propReducer.properties);

  // initial get properties dispatch
  useEffect(() => {
    // set timeout to show place holder cards
    setTimeout(() => {
      // dispatch the getProperties action
      dispatch(
        getProperties(
          'https://pt6-propman-staging.herokuapp.com/api/properties'
        )
      ).then(() => {
        // if successful we change the loading state to false
        setLoading(false);
      });
    }, 2000);
  }, [dispatch]);

  return (
    <div className="properties">
      <h1>List of Properties</h1>
      <Divider />
      <br />

      <Grid container spacing={3}>
        {propertyList.map(property => {
          // map the property list and render PropertyCard's
          const { id, street } = property;

          return (
            <PropertyCard
              key={id}
              svg={<LocationSVG />}
              title={street}
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
      </Grid>
    </div>
  );
}
