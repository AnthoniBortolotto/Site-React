import React, { Component } from 'react'

export interface MensagensProps {
    listaDeMensagens:Array<string>
}
 
export interface MensagensState {
    mensagens:Array<string>
}
 
class Mensagens extends React.Component<MensagensProps, MensagensState> {
    constructor(props:MensagensProps){
        super(props);
        this.state= {
            mensagens: this.props.listaDeMensagens
        };
    }
    private exibirMensagens(): JSX.Element[]{
       // console.log(`Em exibir mensagem: ${this.props.listaDeMensagens.join()}`)
        return (this.state.mensagens.map((mensagem:string, index:number) =>
        {
            return (<li value={mensagem} key={index} className="mensagens__lista__aviso"></li>)
        }))
    }
    render(): JSX.Element { 
        // if(this.props.listaDeMensagens.length == 0){
        //     return (<></>)
        // }
        // else{
        return (  
           <div className="mensagens">
               <ul className="mensagens__lista">
               {this.exibirMensagens()}
               </ul>
           </div> 
        );
    }
}
 
export default Mensagens;