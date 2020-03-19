import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.scss';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
<Provider store={store}>
   <Router><App /></Router>
</Provider>, 
document.getElementById('root'));
