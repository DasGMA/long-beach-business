import React from 'react';
import '../../Styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import HomePage from '../HomePage/HomePage';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

export default function App() {
  return (
    <div className='App'>
      <Navigation />
        <main>
          <Switch>
            <Route exact path = '/' component = { HomePage } />
            <Route path = '/login' component = { Login } />
            {/* <Route path = '/register' component = { Register } /> */}
          </Switch>
        </main>
      <Footer />
    </div>
  );
}
