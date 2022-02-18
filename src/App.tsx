import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <div style={{ minHeight: '100vh' }}>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
