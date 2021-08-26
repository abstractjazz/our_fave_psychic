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
      to="/"
      exact
      activeStyle={{
        background:"darkblue",
      }}
      >
      <h1>home</h1></NavLink>
     
      <NavLink
      to="/watch"
      exact
      activeStyle={{
        background:"darkblue",
      }}
      >
      <h1>watch</h1></NavLink>
      
      <NavLink
      to="/ask"
      exact
      activeStyle={{
        background:"darkblue",
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
      <Route exact path="/" component={home}/>
     <Route exact path="/ask" component={ask}/>
     <Route exact path="/watch" component={watch}/>
    </div>
  );
}

export default App;


