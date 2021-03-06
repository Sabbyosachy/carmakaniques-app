import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Notfound from './Pages/Notfound/Notfound';
import Login from './Pages/Login/Login/Login';
import Booking from './Pages/Booking/Booking';
import Hader from './Pages/Shared/Hader/Hader';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Hader></Hader>
        <Switch>
          <Route exact path="/home">
           <Home></Home>
          </Route>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route path="*">
           <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
