import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Database from '../../Models/Database';

export interface IDeletarState{
    produto:Promise<unknown>
    id:number
}
export interface IEditarLocation{
    state:IDeletarState
}
export interface DeletarProps {
    location:IEditarLocation
}
 
export interface DeletarState {
    
}
 
class Deletar extends React.Component<DeletarProps, DeletarState> {
    constructor(props:DeletarProps)
    {
        super(props);
    }
    private deletar(): void
    {
        Database.deletarProduto(this.retornaId())
    }
    private retornaId(): number {
        const {id} = this.props.location.state;
        return id;
    }
    // private mensagem(){
    //     return ()
    // }
    render(): JSX.Element { 
        
        const {produto} = this.props.location.state;
        console.log(this.retornaId());
        return (  <section>
            <h3>Você tem certeza que deseja deletar este produto?</h3>
            <Link onClick={this.deletar} to="/">Sim</Link>
            <Link to="/">Não</Link>
        </section>);
    }
}
 
export default Deletar;