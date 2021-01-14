import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import Rodape from '../Views/Footer/Rodape';
import Cabecario from '../Views/Header/Cabecario';
import "../utils/css/bootstrap.min.css";

import "../utils/css/index.css";
import "../utils/css/menu.css";
import "../utils/css/tabela.css";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
const App = lazy(() => import('../Views/App'));
const Deletar = lazy(() => import('../Views/Tabela/Deletar'));

const PaginaNaoEncontrada = lazy(() => import("../Views/NotFound/PaginaNaoEncontrada"));
const AddEdit = lazy(() => import("../Views/Tabela/AddEdit"));
const Sobre = lazy(() => import("../Views/Sobre/Sobre"));
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e7d32'
    },
    secondary: {
      main: '#00838f'
    }
  },
});
export const themeAdd = createMuiTheme({
  palette: {
    primary: {
      main: '#283593'
    },
    secondary: {
      main: '#c62828'
    }
  },
});
ReactDOM.render(
  <Suspense fallback={<div></div>}>
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Cabecario />

        <Switch>

          <Route path='/' exact={true} component={App} />
          <Route path='/Sobre' component={Sobre}/>
          <ThemeProvider theme={themeAdd}>
            <Route path='/AddEdit' component={AddEdit} />
            <Route path='/Deletar' component={Deletar} />
            {/* <Route component={PaginaNaoEncontrada} /> */}
          </ThemeProvider>


        </Switch>
      </BrowserRouter>
      <Rodape />
    </ThemeProvider>
  </Suspense>,
  document.getElementById('app')
);



