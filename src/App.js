import React from "react";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Informasi from "./Pages/Informasi";
import Blog from "./Pages/Blog";
import Header from "./Component/Header";
import Splash from "./Pages/Splash";
import Footer from "./Component/Footer";
import HeaderAPK from "./Component/HeaderAPK";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
    <HeaderAPK/>
    <Header/>
        <Switch>
        <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/Informasi">
            <Informasi />
          </Route>
          <Route path="/Order">
            <Order />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Splash />
          </Route>
        </Switch>
        <Footer/>
    </Router>
  );
}
