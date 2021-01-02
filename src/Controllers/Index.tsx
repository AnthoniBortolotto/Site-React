import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '../Views/App';
import Cabecario from "../Views/Header/Cabecario";
import Rodape from "../Views/Footer/Rodape";
ReactDOM.render(
  <>
  <Cabecario/>
  <App />
  <Rodape/>
  </>,
  document.getElementById('app'),
);