import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from './Products';
import Footer from './Footer';
import Brands from './Brands';
import Checkout from './Checkout';
import ShopPage from './ShopPage';
import ShopPage2 from './ShopPage2';
import Payment from './Payment';
import Help from './Help';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Landing from "./Landing";
import Profile from "./Pages/Profile";
import Polls from "./Pages/Polls";
import MyShop from "./Pages/MyShop";
import MyPlaylist from "./Pages/MyPlaylist";


const promise = loadStripe('pk_test_51I5z2PKUnYO6gii7XkYoJw1ALbLEESxCmVwSR9ksnLDAEglPHK4TBvEuZTVvnzSbW0drA200FLsjkqCccse6CDqr00q2bGF4nh');


function App() {
  

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        //the user just logged in or was
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged outß
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/myplaylist">
            <Header />
            <MyPlaylist />
            <Footer />
          </Route>
          <Route path="/myshop">
            <Header />
            <MyShop />
            <Footer />
          </Route>
          <Route path="/polls">
            <Header />
            <Polls />
            <Footer />
          </Route>
          <Route path="/profile">
            <Header />
            <Profile />
            <Footer />
          </Route>
          <Route path="/home">
            <Header />
            <Landing />
            <Footer />
          </Route>
          <Route path="/help">
            <Help />
            <Footer />
          </Route>
         <Route path="/shop2">
            <Header />
            <ShopPage2 />
            <Footer />
          </Route>
          <Route path="/shop">
            <Header />
            <ShopPage />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
          <Route path="/brands">
            <Header />
            <Brands />
            <Footer />
          </Route>
          <Route path="/products">
            <Header />
            <Products />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

