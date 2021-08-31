import React, { Component } from 'react';
import './App.css';
import './index.css';
import {Switch, Route, NavLink} from 'react-router-dom'
import Videos from './Videos'
import QuestionForm from './QuestionForm';
import { unmountComponentAtNode } from 'react-dom';


const handleClick = () => {

  const frame = document.querySelector('iframe');
  const p = document.querySelector('p#advice')
  frame.remove();
  p.remove();

}


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
      id="give"
      to="/give"
      exact
      activeStyle={{
        color:"pink",
      }}
      >
      <h1>give</h1></NavLink>

      <NavLink
      id="ask"
      to="/ask"
      exact
      activeStyle={{
        background:"",
      }}
      >
      <h1>ask</h1></NavLink>
      <div>
        <h1 id="h1">Welcome to the Web Psychic</h1>
        <p id="p">Leave wisdom. Take wisdom.</p>
      </div>
    </div>

    

   
     
  )
}

const ask = () => {
  return (
    <div className="question">
     <NavLink 
     onClick={handleClick}
     id="home"
     to="/"
     exact
     activeStyle={{
      background: "darkblue",
    }}
    >
     <h1>home</h1></NavLink>
     < QuestionForm />
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
     <h1>home</h1></NavLink>
     
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
      <Route exact path="/give" component={videos}/>  
  </Switch>
      </div>
  
    </div>
    
    );
  }
} 


export default App;

