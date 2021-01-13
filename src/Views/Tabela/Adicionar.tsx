import * as React from 'react';
import { Component } from 'react';
import "../../utils/css/form/forms.css";
import "../../utils/css/form/mensagens.css";
import Database from "../../Models/Database";
import Produto from '../../Models/Produto';
import { Link, Redirect } from 'react-router-dom';
import Verificacao from '../../Models/Verificacao';
import TextField from '@material-ui/core/TextField/TextField';
import { createStyles, Grid, makeStyles, Theme, Typography, WithStyles, withStyles } from '@material-ui/core';

interface Ipush {
    push(link: string): void
}
export interface AdicionarProps extends WithStyles<typeof styles> {
    history: Ipush
}

export interface AdicionarState {
    nome: string,
    quantidade: string,
    precoCompra: string,
    precoVenda: string,
    msgNome: string,
    msgQtd: string,
    msgPrcC: string,
    msgPrcV: string,
    erroNome: boolean,
    erroQtd: boolean,
    erroPrcC: boolean,
    erroPrcV: boolean,
}
const styles = (theme: any) => createStyles({
    TxtStyle: {
        margin: '1rem'
    }
})
class Adicionar extends React.Component<AdicionarProps, AdicionarState> {
    constructor(props: AdicionarProps) {
        super(props);
        this.state = {
            nome: '',
            quantidade: '',
            precoCompra: '',
            precoVenda: '',
            msgNome: '',
            msgQtd: '',
            msgPrcC: '',
            msgPrcV: '',
            erroNome: false,
            erroQtd: false,
            erroPrcC: false,
            erroPrcV: false,
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
        let msg = Verificacao.verificarQtd(e.target.value)
        if( msg != "")
        {
            this.setState({erroQtd: true, msgQtd:msg})
        }
        else{
            this.setState({erroQtd: false, msgQtd:msg})
        }
    }
    private handlerTxtPrecoComp(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            precoCompra: e.target.value
        })
        let msg = Verificacao.verificarPrcComp(e.target.value)
        if( msg != "")
        {
            this.setState({erroPrcC: true, msgPrcC:msg})
        }
        else{
            this.setState({erroPrcC: false, msgPrcC:msg})
        }
    }
    private handlerTxtPrecoVend(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            precoVenda: e.target.value
        })
        let msg = Verificacao.verificarPrcVend(e.target.value);
        if( msg != "")
        {
            this.setState({erroPrcV: true, msgPrcV:msg});
        }
        else{
            this.setState({erroPrcV: false, msgPrcV:msg});
        }
    }
    private handlerTxtNome(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            nome: e.target.value
        })
        Verificacao.verificarNome(e.target.value)
        .then(msg =>{
            if(msg != "")
            {
                this.setState({erroNome: true, msgNome: msg})
            }
            else{
                this.setState({erroNome: false, msgNome: msg})
            }
        });
    }
    eventoBtnAdd(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void {
        e.preventDefault();
        let nome = this.state.nome;
        let qtd = this.state.quantidade;
        let prcComp = this.state.precoCompra;
        let prcVend = this.state.precoVenda;

        Verificacao.verificarNome(nome)
            .then(msg => {
                if (msg.length > 1) {
                    return undefined;
                }
                return Verificacao.verificarQtd(qtd)
            })
            .then(msg => {
                if (msg === undefined || msg.length > 1) {
                    return undefined;
                }
                return Verificacao.verificarPrcComp(prcComp);
            })
            .then(msg => {
                if (msg === undefined || msg.length > 1) {
                    return undefined;
                }
                return Verificacao.verificarPrcVend(prcVend);
            })
            .then(msg => {
                if (msg === undefined || msg.length > 1) {
                    return;
                }
                else {
                    Database.adicionarProduto(new Produto(nome, parseInt(qtd), parseFloat(prcComp), parseFloat(prcVend)));
                    this.props.history.push('/');
                }
            })

    }
    render(): JSX.Element {
        const { classes } = this.props;
        return (
            <section>
                <Typography variant="h3" className="text-center">Digite os dados do produto</Typography>
                <form className="formulario border form-group form-check">
                    <Grid container direction="column" alignItems="center">
                        <TextField error={this.state.erroNome} helperText={this.state.msgNome} value={this.state.nome} onChange={this.handlerTxtNome} variant="outlined" label="Nome do Produto" type="text" id="txt-nome" className={classes.TxtStyle} />
                        <TextField error={this.state.erroQtd} helperText={this.state.msgQtd} value={this.state.quantidade} onChange={this.handlerTxtQtd} variant="outlined" label="Quantidade" type="text" id="txt-qtd" className={classes.TxtStyle} />
                        <TextField error={this.state.erroPrcC} helperText={this.state.msgPrcC} value={this.state.precoCompra} onChange={this.handlerTxtPrecoComp} variant="outlined" label="Preço de Compra" type="text" id="txt-prc-comp" className={classes.TxtStyle} />
                        <TextField error={this.state.erroPrcV} helperText={this.state.msgPrcV} value={this.state.precoVenda} onChange={this.handlerTxtPrecoVend} variant="outlined" label="Preço de Venda" type="text" id="txt-prc-vend" className={classes.TxtStyle} />
                        <Grid item>
                            <Link onClick={this.eventoBtnAdd} to="" type="button" id="btn-add" className="btn btn-info formulario__btn__add">Adicionar</Link>
                            <Link to="/" type="button" id="btn-voltar" className="btn btn-danger formulario__btn__voltar">Voltar</Link>
                        </Grid>
                    </Grid>
                </form>

            </section>

        );
    }
}

export default withStyles(styles)(Adicionar);