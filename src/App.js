import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About/About'
import {Route , Switch} from 'react-router-dom';
import Main from './Components/main';
import StoryList from './Components/story/StoryList';
import FavList from './Components/fav/FavList';
import Delete from './Components/delete/Delete';


function App() {
  return (
   <React.Fragment>
    <Navbar/>


     
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/story" component={StoryList}/>
          <Route exact path="/fav" component={FavList}/>
          <Route exact path="/delete" component={Delete}/>
        </Switch>
      
   </React.Fragment>
  );
}

export default App;
