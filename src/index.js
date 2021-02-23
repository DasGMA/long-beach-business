import React from 'react';
import ReactDOM from 'react-dom';
//import './Styles/index.scss';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import getStorePersistor from './Redux/store';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const { store, persistor } = getStorePersistor();

ReactDOM.render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <Router>
           <CssBaseline />
           <MuiThemeProvider theme={theme}>
               <App />
           </MuiThemeProvider>
        </Router>
    </PersistGate>
  
</Provider>, 
document.getElementById('root'));
