import * as React from 'react';
import { Component } from 'react';
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
            <Tabela />
         );
    }
}
 
export default App;