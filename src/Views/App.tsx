import * as React from 'react';
import { Component } from 'react';
import "../utils/css/bootstrap.min.css";
import "../utils/css/form-add.css";
import "../utils/css/index.css";
import "../utils/css/menu.css";
import "../utils/css/tabela.css";
import Tabela from "./Tabela/Tabela";
import Cabecario from "./Header/Cabecario";
import Rodape from "./Footer/Rodape";

export interface Props {

}

export interface State {

}

class App extends React.Component<Props, State> {
   
    render() {
        return (
            <>
            <Tabela />
            </>
         );
    }
}
 
export default App;