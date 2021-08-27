import './App.css';
import {Route, NavLink} from 'react-router-dom'
import './index.css';


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



function App() {
  return (
    <div className="App">
      <div className="Header">
      <Route exact path="/" component={home}/>
     <Route exact path="/ask" component={ask}/>
     <Route exact path="/watch" component={watch}/>
      </div>
    </div>
  );
}

export default App;


