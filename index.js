import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';



import App from './App';
import FormRendering from './Components/FormRendering';
import Home from './Components/Home';
import FormRenderingInFunctions from './Components/FormRenderingInFunctions';

ReactDOM.render(
  <React.StrictMode>
    
   {/* <App/> */
    // <Home/>,
    <FormRenderingInFunctions/>
   }
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
