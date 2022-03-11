import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./pages/login/Login";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home'
import DescubraMais from './pages/descubramais/DescubraMais';
import CadastroUsuario from './pages/cadastrousuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
import PaginaInicio from './pages/inicio/paginaInicio/PaginaInicio';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>
          <Route exact path='/'>
              <PaginaInicio />
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
            <Route path='/tema'>
              <ListaTema />
            </Route>
            <Route path='/postagem'>
              <ListaPostagem />
            </Route>
            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>
            <Route exact path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>
            <Route exact path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>

  );
}

export default App;
