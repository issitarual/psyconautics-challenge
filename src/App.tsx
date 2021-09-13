import { /* Route,  */Switch, BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
/* import React from 'react';
import logo from './logo.svg'; */
import './App.css';

function App(){
  return (
    <BrowserRouter>
    <GlobalStyles />
     <Header /> 
    <Switch>
{/*       <Route path="/" exact component={Characters} /> */}
    </Switch>
     <Footer /> 
  </BrowserRouter>
  );
}

export default App;
