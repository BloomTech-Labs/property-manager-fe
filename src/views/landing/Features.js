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
  const [value, setValue] = React.useState(7);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="featuresBlock">
      <Carousel autoPlay showThumbs={false} showStatus={false}>
        <div className="featuer-slide-show">
          <img src={ads1} alt="advertisment" />
        </div>
      </Carousel>
      <div className={classes.root}>
        <AppBar position="static">
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
          <h3>Enjoy this amazing web app to mamage your property for free</h3>
          <img src={free} alt="free" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h4>The app provides a portal for both Landlord and Tenanent </h4>
        </TabPanel>
        <TabPanel value={value} index={2}>
          is coming...
        </TabPanel>
        <TabPanel value={value} index={3}>
          is coming...
        </TabPanel>
        <TabPanel value={value} index={4}>
          is coming...
        </TabPanel>
        <TabPanel value={value} index={5}>
          is coming...
        </TabPanel>
        <TabPanel value={value} index={6}>
          is coming...
        </TabPanel>
      </div>
    </div>
  );
};
