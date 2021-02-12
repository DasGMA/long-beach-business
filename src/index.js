import React from 'react';
import ReactDOM from 'react-dom';
//import './Styles/index.scss';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import getStorePersistor from './Redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';

const { store, persistor } = getStorePersistor();

ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <Router>
           <CssBaseline />
           <App />
        </Router>
    </PersistGate>
  
</Provider>, 
document.getElementById('root'));
