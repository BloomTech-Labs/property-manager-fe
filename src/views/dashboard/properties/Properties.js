/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';
// UI
import { Grid, Divider } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
// action
import { FaPen } from 'react-icons/fa';
import { getProperties } from '../../../store/actions';
import PropertyCard from '../../../components/Properties/PropertyCard';
import AddPropertyCard from '../../../components/Properties/AddPropertyCard';
import LocationSVG from '../../../components/SVG/LocationSVG';

export default function PropertyList() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const errMsg = useSelector(state => state.propReducer.errMsg);

  const propertyList = useSelector(state => state.propReducer.properties);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        getProperties(
          'https://pt6-propman-staging.herokuapp.com/api/properties'
        )
      ).then(() => {
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
          const { id, street } = property;

          return (
            <React.Fragment key={id}>
              <PropertyCard
                key={id}
                svg={<LocationSVG />}
                title={street}
                icon={<FaPen />}
              />
            </React.Fragment>
          );
        })}

        {(() => {
          if (propertyList.length > 0) {
            return null;
          }
          if (propertyList.length === 0 && loading === false) {
            return null;
          }
          return (
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
