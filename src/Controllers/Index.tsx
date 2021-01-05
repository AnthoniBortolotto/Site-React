import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../Views/App';
const Adicionar = lazy(() => import("../Views/Tabela/Adicionar")) ;
const PaginaNaoEncontrada = lazy(() => import("../Views/NotFound/PaginaNaoEncontrada"));
ReactDOM.render(
  <Suspense fallback={<div></div>}>
  <BrowserRouter>
    <Switch>
        <Route path='/' exact={true} component={App} />
        <Route path='/Adicionar' component={Adicionar} />
        <Route component={PaginaNaoEncontrada}/>
        </Switch>
        </BrowserRouter>
        </Suspense>,
  document.getElementById('app')
);
