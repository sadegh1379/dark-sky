import React from 'react';
import {fetchWeather} from '../../api';
import Input from './Input';
import './main.css';
import AddIcon from './AddIcon';
import Spinner from './Spinner';
import WeatherCard from './Card';
import {WeatherConsumer} from '../../Context';



class Main extends React.Component {
    constructor(){
        super();
        this.getInput = React.createRef();
        this.state ={
            weather : {},
            
            showInput : true,
            loading : false
        }
    }
    

    sendData =async (city)=>{
    
    this.setState({
        loading:true
    })

     const data = await fetchWeather(city);
     if(data.cod === 200){
   
        this.setState({
            weather : data,
            showInput : false,
            loading:false
        })
   
       
     }
  
    }


    

    // set show input ***************
    setShow = ()=>{
        this.setState({
            showInput : !this.state.showInput
        })
    }

    

render(){
    const {showInput , loading , weather } = this.state;
    

    return (
        <div className="main-container">
           
                <Input  sendData={this.sendData} show={showInput} inputRef={this.getInput}/>
                
                {weather.main  && !loading  ? <WeatherCard setFav={this.setFav}  data={weather}/> : null}
                
                {loading ? <Spinner/> : null}
                {showInput ? null : <AddIcon setShow={this.setShow}/>}
                
               
        </div>
    )
}   
}

export default Main
