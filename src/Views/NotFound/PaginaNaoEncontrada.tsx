import React, { Component } from 'react'
import Rodape from '../Footer/Rodape';
import Cabecario from '../Header/Cabecario';

export interface Props {
    
}
 
export interface State {
    
}
 
class PaginaNaoEncontrada extends React.Component<Props, State> {
    render() { 
        return (  
            <>
            <Cabecario />
            <Rodape />
            </>
        );
    }
}
 
export default PaginaNaoEncontrada;