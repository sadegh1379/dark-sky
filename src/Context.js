import React, { Component , createContext } from 'react';

const dataContext =  createContext(); 

 class WeatherProvider extends Component {
     constructor(){
         super();
         this.state = {
            favWeather :  this.getLocalStorage("favWeather") ,
            story : this.getLocalStorage("story")
        }
     }
    

    

    // map in state story
    mapInStoryState = (text)=>{
        let find = false ;
        this.state.story.map((item)=>{
            if(item == text){
                find = true
            }
        })
        
        return find;
      }

      // map in state fav
    mapInFavState = (data)=>{
        let find = false ;
        this.state.favWeather.map((item)=>{
            if(item.name == data.name){
                find = true
            }
        })
        
        return find;
      }

      getLocalStorage = (item)=>{
          return window.localStorage.getItem(item)? JSON.parse( window.localStorage.getItem(item)) : []
      }


    // set story
    setStory = (text)=>{
       const find = this.mapInStoryState(text);

       if(!find){
            this.setState({
                story : [...this.state.story , text]
            } , ()=>{
                window.localStorage.setItem("story" , JSON.stringify(this.state.story));
            })
       }
    }

     // set fav
     setFav = (data)=>{
         let find = this.mapInFavState(data);
         if(!find){
            this.setState({
                favWeather : [...this.state.favWeather , data]
            } , ()=>{
                window.localStorage.setItem("favWeather" , JSON.stringify(this.state.favWeather));
            })
         }
        
    }

    // delete fav weathers
    deleteFav = ()=>{
        this.setState({
            favWeather : []
        })
       window.localStorage.setItem("favWeather" , JSON.stringify([]));
    }

    // delete story weathers
    deleteStory = ()=>{
        this.setState({
            story : []
        })
       window.localStorage.setItem("story" , JSON.stringify([]));
    }

    render() {
        
        return (
            <dataContext.Provider value={{
                ...this.state ,
                setStory : this.setStory ,
                setFav : this.setFav ,
                deleteFav : this.deleteFav,
                deleteStory : this.deleteStory

            }}>
                {this.props.children}
            </dataContext.Provider>
        )
    }
}
const WeatherConsumer = dataContext.Consumer;

export  {WeatherProvider , WeatherConsumer} ;
