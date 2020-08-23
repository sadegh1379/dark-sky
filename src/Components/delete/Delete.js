import React from 'react';
import {WeatherConsumer} from '../../Context';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  

function Delete() {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

    return (
        <div className="mt-4 mx-2">
             
            <WeatherConsumer>
                {value=>{
                    const {deleteFav , deleteStory} = value;
                    return(
                        <>
                        <button onClick={()=>{
                            deleteStory();
                            handleClick();
                        }}
                         className="btn text-light btn-block btn-outline-danger ">پاک کردن تاریخچه </button>
                        <button onClick={()=>{
                            deleteFav();
                            handleClick();
                        }}
                          className="btn text-light btn-block btn-outline-danger">پاک کردن برگزیده ها </button>
                        </>
                    )
                }}
                       
            </WeatherConsumer>
            

            {/* snack bar */}
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        با موفقیت انجام شد
                    </Alert>
                </Snackbar>
           
          
        </div>
    )
}

export default Delete
