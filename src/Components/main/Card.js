import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import {WeatherConsumer} from '../../Context';
import CountUp from 'react-countup';




const useStyles = makeStyles({
  root: {
    maxWidth: 'auto',
    background : 'transparent',
    margin : '5px auto',
    border : '1px solid grey',
    
    textAlign : 'center',
    padding : '10px 5px'
    
  },
  media: {
    height: 150,
    margin : '10px 30px'
  },

  heart : {
      borderRadius : '50px'
  }
  ,
  focus:{
    '&:focus': {
        outline:'none'
         
       }
    }
 
});

export default function WeatherCard({data , setFav}) {
  const classes = useStyles();
  const [bFav , setBFav] = useState(false)
  const { name , weather  , main  } = data;

  return (
    <Card className={classes.root}>
      
      <CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h4" component="h4">
                {name}
                

          </Typography>
          <h4 className="badge badge-warning badge-pill">{weather[0].description}</h4>
          <CardMedia
          className={classes.media}
          image={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          title="icon"
        />
                   
             <Typography variant="h4" gutterBottom>
                    {main.temp}&deg;C
            </Typography>
            <hr/>
            <p className="wow bounceInRight"   data-wow-duration="1.5s" data-wow-dely="0.5s" >
                    
                    <CountUp
                    start={0}
                    end={main.humidity}
                    duration={5}/>
                     <span className="mx-2">  رطوبت هوا</span>
            </p>
            <hr/>
            <p  className="wow bounceInRight"   data-wow-duration="2s" data-wow-dely="0.5s">
                   <CountUp
                    start={0}
                    end={main.pressure}
                    duration={5}/>
                     <span className="mx-2">فشار هوا</span>
            </p>

                   
        </CardContent>

       
       
      </CardActionArea>

      {/* fav icon */}
          <WeatherConsumer>
                { value=>{
                      const { setFav } = value;
                     
                      
                      return(
                      <CardActions className={classes.Buttons}>
                           
                               <IconButton
                               
                               onClick={()=>{
                                 if(!bFav){
                                  setFav(data) ; 
                                  setBFav(!bFav) ;
                                 }else{
                                  setBFav(!bFav) ;
                                 }                        
                                }} 
                                   color={ bFav ?  "secondary" : "default"} aria-label="delete" className={classes.focus}>
                                 <FavoriteOutlinedIcon className={classes.focus}  fontSize="large"  />
                                
                              </IconButton>
                           
                      </CardActions>
                      )
                    }
                  
                }
             
          </WeatherConsumer>
      
    </Card>
  );
}
