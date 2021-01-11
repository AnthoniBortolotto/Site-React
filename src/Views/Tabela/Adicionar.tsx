import * as React from 'react';
import { Component } from 'react';
import $ from 'jquery';
import "../../utils/css/form/forms.css";
import "../../utils/css/form/mensagens.css";
import Database from "../../Models/Database";
import Produto from '../../Models/Produto';
import { Link, Redirect } from 'react-router-dom';
import Verificacao from '../../Models/Verificacao';
import TextField from '@material-ui/core/TextField/TextField';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

interface Ipush{
    push(link:string):void
}
export interface AdicionarProps {
    history: Ipush
}

export interface AdicionarState {
    msgs:Array<string>
    nome:string,
    quantidade: string,
    precoCompra: string,
    precoVenda: string,
}

class Adicionar extends React.Component<AdicionarProps, AdicionarState> {
    constructor(props:AdicionarProps){
        super(props);
        this.state = {
            msgs: [],
            nome: '',
            quantidade: '',
            precoCompra: '',
            precoVenda: ''
        }
        this.handlerTxtNome = this.handlerTxtNome.bind(this);
        this.handlerTxtQtd = this.handlerTxtQtd.bind(this);
        this.handlerTxtPrecoComp = this.handlerTxtPrecoComp.bind(this);
        this.handlerTxtPrecoVend = this.handlerTxtPrecoVend.bind(this);
        this.eventoBtnAdd = this.eventoBtnAdd.bind(this);
    }
    private handlerTxtQtd(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            quantidade: e.target.value
        })
    }
    private handlerTxtPrecoComp(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            precoCompra: e.target.value
        })
    }
    private handlerTxtPrecoVend(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            precoVenda: e.target.value
        })
    }
    private handlerTxtNome(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            nome: e.target.value
        })
    }
    eventoBtnAdd(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
        e.preventDefault();
        let mensagens: string[] = [];
        let nome = this.state.nome;
        let qtd = this.state.quantidade;
        let prcComp = this.state.precoCompra;
        let prcVend = this.state.precoVenda;

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
    render(): JSX.Element {
        return (
            <section>
                <Typography variant="h3" className="text-center">Digite os dados do produto</Typography>
                <form className="formulario border form-group form-check">
                <div className="mensagens">
                    <ul className="mensagens__lista">
                        {this.exibirMensagens()}
                    </ul>
                </div>
                    <TextField value={this.state.nome} onChange={this.handlerTxtNome} variant="outlined" label="Nome do Produto" type="text" id="txt-nome" className="formulario__txt" />
                    <TextField value={this.state.quantidade} onChange={this.handlerTxtQtd} variant="outlined" label="Quantidade" type="text" id="txt-qtd" className="formulario__txt" />
                    <TextField value={this.state.precoCompra} onChange={this.handlerTxtPrecoComp} variant="outlined" label="Preço de Compra" type="text" id="txt-prc-comp" className="formulario__txt" />
                    <TextField value={this.state.precoVenda} onChange={this.handlerTxtPrecoVend} variant="outlined" label="Preço de Venda" type="text" id="txt-prc-vend" className="formulario__txt" />
                    <Link onClick={this.eventoBtnAdd} to="" type="button" id="btn-add" className="btn btn-info formulario__btn__add">Adicionar</Link>
                    <Link to="/" type="button" id="btn-voltar" className="btn btn-danger formulario__btn__voltar">Voltar</Link>
                </form>

            </section>

        );
    }
}

export default Adicionar;