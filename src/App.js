import React from "react";
import './App.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/includes/Navbar";
import Footer from "./components/includes/Footer";
import {BrowserRouter as Router,Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div> 
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
