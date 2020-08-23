import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {WeatherConsumer} from '../../Context';

const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
    
//   },
// },

input : {
  color: 'white',
  textAlign :'center',
  

}


}));

export default function Input({show , sendData , inputRef}) {
  const classes = useStyles();

  const [text , setText] = useState('');

  const submit = (e , func)=>{
    e.preventDefault();
    sendData(text);
    func(text)
    setText('')
  }

  if(show){
    return (
    <WeatherConsumer>
      {value=>{
        const {setStory}= value;
        return(
              <form className="wow bounceInLeft" data-wow-duration="1s" data-wow-dely="0.5s" 
                      onSubmit={(e)=>submit(e , setStory)}
                      style={{textAlign:'center'}}   dir="rtl" autoComplete="off">
                        <TextField  ref={inputRef} className={classes.input} value={text} onChange={(e)=>setText(e.target.value)}  color="primary"  size="small"    className={classes.input} id="standard-basic" label="شهر یا کشور را وارد کنید......."  />
                        
             </form>
        )
      }}
    </WeatherConsumer>
      
        
     
    );
  }else{
    return null;
  }

 
}
