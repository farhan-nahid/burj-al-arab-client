import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const userContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={ [loggedInUser, setLoggedInUser] }>
      <p>Name : {loggedInUser.name}</p>
          <Router>
              <Header/>
              <Switch>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <PrivateRoute path="/book/:bedType">
                  <Book />
                </PrivateRoute>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
          </Router>
      </userContext.Provider >
  );
}

export default App;
