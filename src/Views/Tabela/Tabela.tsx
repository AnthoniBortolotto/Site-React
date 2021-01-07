import React, { Component, lazy } from 'react'
import { Link, Route } from 'react-router-dom';
import Database from "../../Models/Database";
import Produto from "../../Models/Produto";
export interface TabelaProps {

}

export interface TabelaState {
    produtos: unknown[]
}

class Tabela extends React.Component<TabelaProps, TabelaState> {
    constructor(props: TabelaProps) {
        super(props);

        this.state = {
            produtos: []
        }
        this.atualizarProdutos();

    }
    private atualizarProdutos(): void {
        Database.dadosTabela().then(res => {
            this.setState({ produtos: res })
        });
    }
    private montarTabela(): JSX.Element[] {
        return (
            this.state.produtos.map((dado: any, index) => {
                return (
                    <tr key={index}>
                        <td key={index}>{dado.nome}</td>
                        <td key={index}>{dado.qtd}</td>
                        <td key={index}>R$ {dado.prcComp}</td>
                        <td key={index}>R$ {dado.prcVend}</td>
                        <td><Link to={{ pathname: '/Editar', state: { id: index } }} className="tabela__icone-lapis"></Link><Link to={{ pathname: '/Deletar', state: { id: index, produto: Database.obterProduto(index) } }} className="tabela__icone-lixo"></Link></td>
                    </tr>)
            })
        )
    }

    render(): JSX.Element {
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
                        {this.montarTabela()}
                    </tbody>
                </table>

                <Link to="/Adicionar" type="button" id="btn-pag-add" className="btn btn-info botao-add">Adicionar Produto</Link>

            </section>);
    }
}

export default Tabela;