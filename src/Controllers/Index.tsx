import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../Views/App';
import Adicionar from "../Views/Tabela/Adicionar";
import PaginaNaoEncontrada from "../Views/NotFound/PaginaNaoEncontrada";
// function CriarDB(){
//   let db: IDBDatabase;
//   const nomeDB = "Banco";
//   const nomeLoja = "Produtos";
//   if (window.indexedDB) {
//       const request = window.indexedDB.open(nomeDB, 2);
//       request.onerror = (event) => console.log('erro na criação', event);
//       request.onsuccess = (event) => {
//           db = request.result;
//           console.log("sucesso na criação", event, db);
//       }
//       request.onupgradeneeded = (event: any) => {
//           db = event.target.result;
//           let loja = db.createObjectStore(nomeLoja, {
//                   keyPath: 'id',
//                   autoIncrement: true
//           });
//       }
//  }
// }

// CriarDB();
ReactDOM.render(
  <BrowserRouter>
    <Switch>
        <Route path='/' exact={true} component={Adicionar} />
        <Route path='/Adicionar' component={App} />
        <Route component={PaginaNaoEncontrada}/>
        </Switch>
        </BrowserRouter>,
  document.getElementById('app')
);
