import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import PersonIcon from '@material-ui/icons/Person';
import UpdateIcon from '@material-ui/icons/Update';
import AboutCard from './AboutCard';
import AboutAppCard from './AboutAppCard'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 'auto',
    margin : '5px 6px'
  },
  tab : {
    '&:focus':{
        outline:'none'
    }
  } , 
  panel : {
    minHeight:'100%'
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab icon={<PhoneIphoneIcon/>}  className={classes.tab} label="درباره اپ" {...a11yProps(0)} />
          <Tab icon={<PersonIcon/>} className={classes.tab} label="درباره سازنده" {...a11yProps(1)} />
          <Tab icon={<UpdateIcon/>} className={classes.tab} label="آبدیت ها" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel className={classes.panel} value={value} index={0} dir={theme.direction}>
          <AboutAppCard/>
        </TabPanel>
        <TabPanel className={classes.panel} value={value} index={1} dir={theme.direction}>
        <AboutCard/>
        </TabPanel>
        <TabPanel className={classes.panel} value={value} index={2} dir={theme.direction}>
          <h6>
            آخرین ابدیت 99/06/02
          </h6>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
