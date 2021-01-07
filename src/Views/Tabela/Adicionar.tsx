import * as React from 'react';
import { Component } from 'react';
import $ from 'jquery';

import Cabecario from "../Header/Cabecario";
import Rodape from "../Footer/Rodape";
import Database from "../../Models/Database";
import Produto from '../../Models/Produto';
import { Link, Redirect } from 'react-router-dom';
import Verificacao from '../../Models/Verificacao';

export interface AdicionarProps {
    
}
 
export interface AdicionarState {
    
}
 
class Adicionar extends React.Component<AdicionarProps, AdicionarState> {
    eventoBtnAdd()
    {
        let nome = $("#txt-nome").val() as string;
        let qtd = $("#txt-qtd").val() as string;
        let prcComp = $("#txt-prc-comp").val() as string;
        let prcVend = $("#txt-prc-vend").val() as string;
        
    }
    render() {
        return ( 
            <section>
            
             <h3 className="text-center">Digite os dados do produto</h3>
        <form className="formulario border form-group form-check">
            <label className="formulario__etiqueta form-check-label">Nome do produto:</label>
            <input type="text" id="txt-nome" className="formulario__txt"/>
            <label className="formulario__etiqueta form-check-label">Quantidade: </label>
            <input type="text" id="txt-qtd" className="formulario__txt"/>
            <label className="formulario__etiqueta form-check-label">Preço de Compra:</label>
            <input type="text" id="txt-prc-comp" className="formulario__txt"/>
            <label className="formulario__etiqueta form-check-label">Preço de Venda:</label>
            <input type="text" id="txt-prc-vend" className="formulario__txt"/>
            <Link  onClick={this.eventoBtnAdd.bind(this)} to="/" type="button" id="btn-add" className="btn btn-info formulario__btn__add">Adicionar</Link>
            <Link to="/" type="button" id="btn-voltar"  className="btn btn-danger formulario__btn__voltar">Voltar</Link>
        </form> 
        
        </section>
        
         );
    }
}
 
export default Adicionar;