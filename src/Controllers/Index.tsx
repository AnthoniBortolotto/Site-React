import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../Views/App';
import Adicionar from "../Views/Tabela/Adicionar";
import PaginaNaoEncontrada from "../Views/NotFound/PaginaNaoEncontrada";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path='/' exact={true} component={App} />
        <Route path='/Adicionar' component={Adicionar} />
        <Route component={PaginaNaoEncontrada}/>
        </Switch>
        </BrowserRouter>,
  document.getElementById('app')
);
