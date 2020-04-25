import React from 'react';
import { navigate } from '@reach/router';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { Skeleton } from '@material-ui/lab';

function LowerCard({ props }) {
  const { icon, iconPath } = props;

  return (
    <>
      <CardActionArea
        onClick={() => {
          navigate(iconPath);
        }}
      >
        <CardActions className="property-card-action">
          {icon || <Skeleton variant="circle" width={28} height={28} />}
        </CardActions>
      </CardActionArea>
    </>
  );
}

export default LowerCard;
