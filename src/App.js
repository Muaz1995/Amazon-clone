import React, { useEffect } from 'react';

import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from "./Firebase";

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import { useStateValue } from './StateProvider'
import Payment from './Payment';

const promise = loadStripe('pk_test_51HqVm6CpEi2RT5CcQSSM3K7mquO6K9hjMTejeYbXwpOVqC0MYnqdJ124hrjbj1XXuSaYvQ91gg6WfymlvkZRdK1k00bltWLtHK')

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>' , authUser);
       // as soon as the app loads we attach this listener. If we log in it fires this code or log out.
    // will only run once when the app component loads
    if (authUser) {

      dispatch({
        type: 'SET_USER', // type is called set_user
        user:authUser // the action is user and the 
      })
      // the if statement says that if the user is logged in then dispatch and set_user to authUser
    } else {
      dispatch({
        type:'SET_USER',
        user:null
      })
      // if the user is logged out then set_user to null. 
    }
    })
  }, [])


  return (
    <Router>

      <Header />

    <div className="app">
      <Switch>

          <Route path = "/checkout">
            <Checkout />        
          </Route>

          <Route path = "/login">
            <Login />        
          </Route>

          <Route path = "/Payment">

            <Elements stripe = { promise }>
              < Payment />    
            </Elements>  
          </Route>

          <Route path = "/">
            <Home />          
          </Route>
      </Switch>

    </div>
    </Router> 
  );
}

export default App;
