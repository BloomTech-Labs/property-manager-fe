/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ads1 from '../../assets/img/adds/advertisemnt1.jpg';
import free from '../../assets/img/free.gif';

function TabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function open(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 'auto',
    color: 'white'
  }
}));

export default () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="featuresBlock">
      <Carousel
        autoPlay
        showThumbs={false}
        showStatus={false}
        className="featuer-slide-show"
      >
        <div>
          <img src={ads1} alt="advertisment" />
        </div>
      </Carousel>
      <div className={classes.root}>
        <AppBar position="relative" color="inherit">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Pricing" {...open(0)} />
            <Tab label="Portal" {...open(1)} />
            <Tab label="Leasing" {...open(2)} />
            <Tab label="Billing and Payments" {...open(3)} />
            <Tab label="Task Management" {...open(4)} />
            <Tab label="Reporting Tool" {...open(5)} />
            <Tab label="Communication" {...open(6)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <h4>Enjoy this amazing web app to mamage your property for free</h4>
          <img src={free} alt="free" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>The app provides a portal for both Landlord and Tenant </p>
          <p>Property owner/manager can :</p>
          <ul>
            <li>Login</li>
            <li>Create login for Tenants</li>
            <li>Review work orders and Manage maintenance</li>
            <li> Advertising their property and collect online payments</li>
          </ul>
          <p>Tenant can :</p>
          <ul>
            <li>Login</li>
            <li>Pay online</li>
            <li>Send work orders and follow-up maintenance</li>
            <li>Apply and file rental application</li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <p>Leasing is quite easy with PropMan app.</p>
          <ul>
            <li>Online application</li>
            <li>Background checking</li>
            <li>File protection and organization</li>
            <li>Alert on Lease expiration and renewal</li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <p>Billing and payment with PropMan provides</p>
          <ul>
            <li>Online Payment</li>
            <li>Split payment</li>
            <li>Easy payment collection</li>
            <li>Alert payment due date</li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <p>Task management is the priority of PropMan</p>
          <ul>
            <li>Online maintenance request</li>
            <li>Identify maintenance emergency</li>
            <li>Convenient time to run maintenance</li>
            <li>Sort-out maintenance request based on type</li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <p>Reporting tools</p>
        </TabPanel>
        <TabPanel value={value} index={6}>
          <p>
            Easy communication between Tenants and Landlord provides verywell
            propery management.
          </p>
          <p>Therefore, Propman provides:</p>
          <ul>
            <li>live chat</li>
            <li>email alert</li>
            <li>Phone text alert</li>
          </ul>
        </TabPanel>
      </div>
    </div>
  );
};
