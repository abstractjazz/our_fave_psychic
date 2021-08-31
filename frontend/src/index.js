import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './containers/index.css';
import './containers/App.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import { BrowserRouter as Router} from "react-router-dom";



ReactDOM.render(
  
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <App store={store} />
    </Router>
   
    </Provider>
  </React.StrictMode>,
 
  document.getElementById('root')
);

registerServiceWorker();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


