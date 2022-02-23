import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home'
import DescubraMais from './pages/descubramais/DescubraMais';
import './App.css';
import CadastroUsuario from './pages/cadastrousuario/CadastroUsuario';

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
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/descubra'>
            <DescubraMais />
          </Route>
          <Route path='/cadastrousuario'>
            <CadastroUsuario />
          </Route>
        </div>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
