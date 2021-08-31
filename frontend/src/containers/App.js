import React, { Component } from 'react';
import './App.css';
import './index.css';
import {Switch, Route, NavLink} from 'react-router-dom'
import Videos from './Videos'

// two arrays // in this file 
// array of video objects (name & URL)
// array of questions 
// use form to submit to the backend <---

const watch = () => {
  return(
   <div className="watch">
     <NavLink
     to="/"
     exact
     activeStyle={{
       background: "darkblue",
     }}
      >
    <h1>home</h1></NavLink>
    </div>
  )
}


const home = () => {
  return(

    <div>
      <NavLink 
      id = "home"
      to= "/"
      exact
      activeStyle={{
        color:"pink",
      }}
      >
      <h1>home</h1></NavLink>
     
      <NavLink
      id="watch"
      to="/watch"
      exact
      activeStyle={{
        color:"pink",
      }}
      >
      <h1>watch</h1></NavLink>
      
      <NavLink
      id="ask"
      to="/ask"
      exact
      activeStyle={{
        background:"",
      }}
      >
      <h1>ask</h1></NavLink>

    </div>
     
  )
}

const ask = () => {
  return (
    <div>
     <NavLink 
     to="/"
     exact
     activeStyle={{
      background: "darkblue",
    }}
    >
     <h1>cool!</h1></NavLink>
    </div>
  )
}



const videos = () => {
  return (
    <div>
     <NavLink 
     to="/"
     exact
     activeStyle={{
      background: "darkblue",
    }}
    >
     <h1>cool!</h1></NavLink>
     
     <div className="video-box">
      <Videos videos={videos}/>
    </div>
    </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }
  
 
  render() {
  return (

    <div className="App">
      <div className="Header">
        <Switch>
      <Route exact path="/" component={home}/>
     <Route exact path="/ask" component={ask}/>
    <Route exact path="/watch" component={watch}/>  
    <Route exact path="/videos" component={videos}/>  
     </Switch>
      </div>
  
    </div>
    
    );
  }
} 


export default App;

