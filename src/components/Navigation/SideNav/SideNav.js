// React
import React from 'react';

// Style & classnames
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

// MUI Components
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// MUI Icons
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import BuildIcon from '@material-ui/icons/Build';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from 'react-redux';

// Reach Router
import { navigate } from '@reach/router';

// Logo
import logo from '../../../assets/img/logo.png';
import { useFirebase } from 'react-redux-firebase';
// eslint-disable-next-line no-unused-vars
import ListLandlord from './ListLandlord';
// eslint-disable-next-line no-unused-vars
import ListTenant from './ListTenant';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  logo: {
    height: 40,
    margin: 'auto'
  },
  list: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    paddingTop: 0,
    width: '100%',
    '& :last-child': {
      marginTop: 'auto'
    }
  }
}));

function SideNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const firebase = useFirebase();
  // Subscribe to user state
  const profile = useSelector(state => state.firebase.profile.token);
  const landlord = profile ? profile.claims.landlord : null;

  const handleLogout = async () => {
    await firebase.auth().signOut();
    navigate('/');
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <CssBaseline />
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open
          })
        }}
      >
        <div className={classes.toolbar}>
          <img className={classes.logo} src={logo} alt="Freehold branding" />
        </div>
        <Divider />
        <List className={classes.list}>
          <ListItem button onClick={() => navigate('/dashboard')}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <Divider />

          <ListItem button onClick={() => navigate('/dashboard/profile')}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

          {landlord === true ? (
            <ListItem button onClick={() => navigate('/dashboard/properties')}>
              <ListItemIcon>
                <HomeWorkIcon />
              </ListItemIcon>
              <ListItemText primary="Properties" />
            </ListItem>
          ) : null}

          {landlord === false ? (
            <ListItem button onClick={() => navigate('/dashboard/property')}>
              <ListItemIcon>
                <HomeWorkIcon />
              </ListItemIcon>
              <ListItemText primary="My Property" />
            </ListItem>
          ) : null}

          {landlord === true ? (
            <ListItem button onClick={() => navigate('/dashboard/tenants')}>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Tenants" />
            </ListItem>
          ) : null}

          <ListItem button onClick={() => navigate('/dashboard/workorders')}>
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary="Work Orders" />
          </ListItem>

          <div>
            <Divider />
            <ListItem button onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </div>
        </List>
      </Drawer>
    </>
  );
}

export default SideNav;
