import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Database from "../../Models/Database";
import Produto from "../../Models/Produto";
export interface TabelaProps {

}

export interface TabelaState {

}
// function sobrouAntes()
// {
//     return(
//         Database.dadosTabela().then(res => {
//                   res.map(dado => {
//                       <tr>
//                           <td>${dado.nome}</td>
//                           <td>${dado.qtd}</td>
//                           <td>${dado.prcComp}</td>
//                           <td>${dado.prcVend}</td>
//                           <td><a className="tabela__icone-lapis"></a><a className="tabela__icone-lixo"></a></td>
//                       </tr>
//                   })
//               })
//     )
        
// }

class Tabela extends React.Component<TabelaProps, TabelaState> {
    render() {
        //Database.dadosTabela()
        return (
            <section className="produtos">

                <h3 className="text-center titulo">Bem vindo a lojinha</h3>
                <table className="table table-bordered tabela">
                    <thead>
                        <tr>
                            <td>Nome do produto</td>
                            <td>Quantidade</td>
                            <td>Preço de compra</td>
                            <td>Preço de venda</td>
                            <td>Ações</td>
                        </tr>
                    </thead>
                    <tbody id="corpo-tabela">
                    </tbody>
                </table>
                <input type="button" id="btn-pag-add" className="btn btn-info botao-add" value="Adicionar Produto" />
            </section>);
    }
}

export default Tabela;