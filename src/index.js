import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import ContactMe from './Components/ContactMe';
import Details from './Components/Details';
import './index.css';

ReactDOM.render(
  <>
    <App />
    <ContactMe />
    <Details />
  </>,
  document.getElementById('root')
);

