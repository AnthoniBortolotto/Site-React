import * as React from 'react';
import { Component } from 'react';
import $ from 'jquery';
import "../../utils/css/form/forms.css";
import "../../utils/css/form/mensagens.css";
import Database from "../../Models/Database";
import Produto from '../../Models/Produto';
import { Link, Redirect } from 'react-router-dom';
import Verificacao from '../../Models/Verificacao';

interface Ipush{
    push(link:string):void
}
export interface AdicionarProps {
    history: Ipush
}

export interface AdicionarState {
    msgs:Array<string>
}

class Adicionar extends React.Component<AdicionarProps, AdicionarState> {
    constructor(props:AdicionarProps){
        super(props);
        this.state = {msgs: []}
        this.eventoBtnAdd = this.eventoBtnAdd.bind(this);
    }
    eventoBtnAdd(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();
        let mensagens: string[] = [];
        let nome = $("#txt-nome").val() as string;
        let qtd = $("#txt-qtd").val() as string;
        let prcComp = $("#txt-prc-comp").val() as string;
        let prcVend = $("#txt-prc-vend").val() as string;

        Verificacao.verificarNome(nome, mensagens)
            .then(msgs => {
                return Verificacao.verificarQtd(qtd, msgs)
            })
            .then(msgs => {
                return Verificacao.verificarPrcComp(prcComp, msgs);
            })
            .then(msgs => {
                return Verificacao.verificarPrcVend(prcVend, msgs);
            })
            .then(msgs => {
                if (msgs.length > 0) {
                    console.log(`nome: ${nome}, qtd: ${qtd}, prcC: ${prcComp}, prcV: ${prcVend}, mensagens: ${msgs.join()}`);                    
                    this.setState({ msgs: msgs });
                }
                else{
                    Database.adicionarProduto(new Produto(nome, parseInt(qtd), parseFloat(prcComp), parseFloat(prcVend)));
                    this.props.history.push('/');
                }
            })

    }
    private exibirMensagens(): JSX.Element[] {
        // console.log(`Em exibir mensagem: ${this.props.listaDeMensagens.join()}`)
        return (this.state.msgs.map((mensagem: string, index: number) => {
            return (<li key={index} className="mensagens__lista__aviso">{mensagem}</li>)
        }))
    }
    render() {
        return (
            <section>
                <h3 className="text-center">Digite os dados do produto</h3>
                <form className="formulario border form-group form-check">
                <div className="mensagens">
                    <ul className="mensagens__lista">
                        {this.exibirMensagens()}
                    </ul>
                </div>
                    <label className="formulario__etiqueta form-check-label">Nome do produto:</label>
                    <input type="text" id="txt-nome" className="formulario__txt" />
                    <label className="formulario__etiqueta form-check-label">Quantidade: </label>
                    <input type="text" id="txt-qtd" className="formulario__txt" />
                    <label className="formulario__etiqueta form-check-label">Preço de Compra:</label>
                    <input type="text" id="txt-prc-comp" className="formulario__txt" />
                    <label className="formulario__etiqueta form-check-label">Preço de Venda:</label>
                    <input type="text" id="txt-prc-vend" className="formulario__txt" />
                    <Link onClick={this.eventoBtnAdd} to="" type="button" id="btn-add" className="btn btn-info formulario__btn__add">Adicionar</Link>
                    <Link to="/" type="button" id="btn-voltar" className="btn btn-danger formulario__btn__voltar">Voltar</Link>
                </form>

            </section>

        );
    }
}

export default Adicionar;