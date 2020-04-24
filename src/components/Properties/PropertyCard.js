/* eslint react/prop-types: 0 */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import LowerCard from './LowerCard';
import UpperCard from './UpperCard';
import './propertycard.scss';

export default function PropertyCard(props) {
  const { handleOpen, property } = props;

  const handleClick = () => {
    if (handleOpen) {
      return handleOpen(property);
    }

    return null;
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className="property-card">
        <UpperCard handleClick={handleClick} props={props} />
        <Divider />
        <LowerCard props={props} />
      </Card>
    </Grid>
  );
}
