import React from 'react';
import { navigate } from '@reach/router';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Skeleton } from '@material-ui/lab';

function UpperCard({ handleClick, props }) {
  const { title, img, upperPath } = props;

  return (
    <>
      <CardActionArea
        onClick={e => {
          e.stopPropagation();
          navigate(upperPath);
          handleClick();
        }}
      >
        <CardMedia className="property-card-media">
          {img || <Skeleton variant="rect" height={140} width="100%" />}
        </CardMedia>
        <CardContent>
          <h5>{title || <Skeleton />}</h5>
        </CardContent>
      </CardActionArea>
    </>
  );
}

export default UpperCard;
