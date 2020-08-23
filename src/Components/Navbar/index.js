import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloudIcon from '@material-ui/icons/Cloud';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EventNoteIcon from '@material-ui/icons/EventNote';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import {Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles( theme =>({
    root: {
        flexGrow: 1,
      },
      // menuButton: {
      //   marginRight: theme.spacing(2),
        
      // },
      title: {
        flexGrow: 1,
      },
      navig : {
        backgroundColor : '#e91e63',
      },
      navi :{
          backgroundColor : 'black'
      },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  appBar :{
    backgroundColor : '#546e7a',
  },
 
}));

export default function Navbar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
   
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  

  return (
    <div dir="rtl">
     
        <React.Fragment>
        
                    <AppBar className={classes.appBar}  position="static" >
                        <Toolbar>
                        <IconButton variant="outlined" onClick={toggleDrawer('right', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            
                        </Typography>
                             <CloudIcon/>
                        </Toolbar>
                    </AppBar>
                    
          
          <SwipeableDrawer 
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            {/* {list} */}
            <div 
                className={classes.list }
                role="presentation"
                // onClick={}
                // onKeyDown={}
              >
                  <List >
                          <img style={{width:'100%' , height:'200px' , marginTop:'-10px'}} src="https://scx1.b-cdn.net/csz/news/800/2018/1-whytheweathe.jpg" alt="weather app"/>
                          <Link className="navbar-link" style={{ textDecoration: 'none' }}  to="/">
                                  <ListItem button >
                                        <ListItemIcon>
                                        <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText  primary={'صفحه ی اصلی'}/>
                                  </ListItem>
                              </Link>
                              <Link className="navbar-link" style={{ textDecoration: 'none' }} to="/story">
                                  <ListItem button >
                                        <ListItemIcon>
                                        <EventNoteIcon />
                                        </ListItemIcon>
                                        <ListItemText  primary={'تاریخچه جستوجو'}/>
                                  </ListItem>
                              </Link>
                              <Link className="navbar-link" style={{ textDecoration: 'none' }} to="/fav">
                                  <ListItem button>
                                        <ListItemIcon>
                                        <FavoriteIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={"علاقه مندی ها"}/>
                                  </ListItem>
                                </Link>
                                <Link className="navbar-link " style={{ textDecoration: 'none' }} to="/delete">
                                  <ListItem button>
                                        <ListItemIcon>
                                        <DeleteIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={"پاک کردن همه"}/>
                                  </ListItem>
                                </Link>
                                <Link className="navbar-link" style={{ textDecoration: 'none' }} to="/about">
                                  <ListItem button>
                                        <ListItemIcon>
                                        <InfoIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary={"درباره"}/>
                                  </ListItem>
                                </Link>
                    </List>
           </div>

          </SwipeableDrawer>
                        
        </React.Fragment>
      
    </div>
  );
}
