import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'; -- Giving Tenant a small difference in looks.
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { navigate } from '@reach/router';

function ListView() {
  return (
    <div>
      <ListItem button onClick={() => navigate('/dashboard/profile')}>
        <ListItemIcon>
          <PersonRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </div>
  );
}

export default ListView;
