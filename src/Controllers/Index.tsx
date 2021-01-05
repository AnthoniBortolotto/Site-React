import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../Views/App';
import Rodape from '../Views/Footer/Rodape';
import Cabecario from '../Views/Header/Cabecario';

const PaginaNaoEncontrada = lazy(() => import("../Views/NotFound/PaginaNaoEncontrada"));
const Adicionar = lazy(() => import("../Views/Tabela/Adicionar"));
ReactDOM.render(
  <Suspense fallback={<div></div>}>
    <Cabecario/>
  <BrowserRouter>
    <Switch>
        <Route path='/' exact={true} component={App} />
        <Route path='/Adicionar' component={Adicionar} />
        <Route component={PaginaNaoEncontrada}/>
        </Switch>
        </BrowserRouter>
        <Rodape/>
        </Suspense>,
  document.getElementById('app')
);
