import React, { Component } from 'react';
import './App.css';
import './index.css';
import {Route, NavLink} from 'react-router-dom'
import Videos from './Videos'



// two arrays // in this file 
// array of video objects (name & URL)
// array of questions 
// use form to submit to the backend <---

const watch = () => {
  return(
   <div className="watch">
     <NavLink
     to="/watch"
     exact
     activeStyle={{
       background: "darkblue",
     }}
      >
    <h1>watch</h1></NavLink>
    </div>
  )
}


const home = () => {
  return(
    <div>
      <NavLink 
      id = "home"
      to="/"
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


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: []
    }
  }
  
  componentDidMount() {
     fetch('http://localhost:3000/api/videos')
    .then(resp => resp.json())
    .then(videos => this.setState({ videos }))
  };  
  render() {
  return (

    <div className="App">
      <div className="Header">
      <Route exact path="/" component={home}/>
     <Route exact path="/ask" component={ask}/>
     <Route exact path="/watch" component={watch}/>
     
      </div>
      <div className="video-box">
      <Videos videos={this.state.videos}/>
    </div>
    </div>
    
    );
  }
} 

// componentDidMount() {
//   fetch("http://api.open-notify.org/astros.json")
//     .then((response) => response.json())
//     .then((data) => {
//       this.setState({
//         peopleInSpace: data.people,
//       });
//     });
// }


export default App;


// state = {
//   username: "",
//   password: ""
// }

// //since the id values are the same as the keys in state, we can write an abstract setState here
// handleChange = event => {
//   this.setState({
//     [event.target.id]: event.target.value
//   })
// }

// render() {
//   return (
//     <form onSubmit={this.handleSubmit}>
//       <input type="text" id="username" value={this.state.username} onChange={this.handleChange}/>
//       <input type="text" id="password" value={this.state.password} onChange={this.handleChange}/>
//     </form>
//   )
// FETCH POST // }

// handleSubmit = (event) => {
//   event.preventDefault();
//   fetch("the server URL", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(this.state),
//   });
// HANDLER WITH FETCH };

