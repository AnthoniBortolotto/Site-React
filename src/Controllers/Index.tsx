import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Rodape from '../Views/Footer/Rodape';
import Cabecario from '../Views/Header/Cabecario';
import "../utils/css/bootstrap.min.css";

import "../utils/css/index.css";
import "../utils/css/menu.css";
import "../utils/css/tabela.css";
import Sobre from '../Views/Sobre/Sobre';
const App = lazy(() => import('../Views/App'));
const Deletar = lazy(() => import('../Views/Tabela/Deletar'));
const Editar = lazy(() => import('../Views/Tabela/Editar'));

const PaginaNaoEncontrada = lazy(() => import("../Views/NotFound/PaginaNaoEncontrada"));
const Adicionar = lazy(() => import("../Views/Tabela/Adicionar"));
const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
ReactDOM.render(
   <Suspense fallback={<div></div>}>

     <BrowserRouter>
     <Cabecario />

       <Switch>

         <Route path='/' exact={true} component={App} />
         <Route path='/Adicionar' component={Adicionar} />
         <Route path='/Editar' component={Editar} />
         <Route path='/Deletar' component={Deletar} />
         <Route path='/Sobre' component={Sobre}/> 

       </Switch>
     </BrowserRouter>
     <Rodape />
  </Suspense>,
  document.getElementById('app')
);



