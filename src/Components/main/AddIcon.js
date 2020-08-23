import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme =>({
  AddButton : {
      position : 'fixed',
      bottom : '5px',
      right : '5px',
      
  },
  AddIcon : {
        fontSize : '60px'
  }
}));

function AddIcon({setShow}) {
    const classes = useStyles();
    return (
        <IconButton onClick={setShow} className={classes.AddButton}     aria-label="add an alarm">
                <AddCircleIcon className={classes.AddIcon} fontSize="large" />
        </IconButton>
    )
}

export default AddIcon
