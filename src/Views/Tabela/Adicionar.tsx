import * as React from 'react';
import { Component } from 'react';
import $ from 'jquery';
import "../../utils/css/bootstrap.min.css";
import "../../utils/css/form-add.css";
import "../../utils/css/index.css";
import "../../utils/css/menu.css";
import "../../utils/css/tabela.css";
import Cabecario from "../Header/Cabecario";
import Rodape from "../Footer/Rodape";
import Database from "../../Models/Database";
import Produto from '../../Models/Produto';
import { Redirect } from 'react-router-dom';

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
        Database.adicionarProduto(new Produto(nome, parseInt(qtd), parseFloat(prcComp), parseFloat(prcVend)));
      // return <Redirect to="/Adicionar"/>
    }
    render() {
        return ( 
            <>
            <Cabecario/>
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
            <input onClick={this.eventoBtnAdd.bind(this)} type="button" value="Adicionar" id="btn-add" className="btn btn-info formulario__btn__add"/>
            <input type="button" value="Voltar" id="btn-voltar"  className="btn btn-danger formulario__btn__voltar"/>
        </form> 
        <Rodape/>
        </>
        
         );
    }
}
 
export default Adicionar;