import * as React from 'react';
import "../../utils/css/form/forms.css";
import Database from "../../Models/Database";
import Produto from '../../Models/Produto';
import Verificacao from '../../Models/Verificacao';
import TextField from '@material-ui/core/TextField/TextField';
import { Button, createStyles, Grid, makeStyles, Theme, Typography, WithStyles, withStyles } from '@material-ui/core';


export interface IEditarState {
    id: number | undefined
}
export interface IAdicionarLocation {
    state: IEditarState
}
interface Ipush {
    push(link: string): void
}
export interface AddEditProps extends WithStyles<typeof styles> {
    history: Ipush
    location: IAdicionarLocation
}

export interface AddEditState {
    nome: string,
    nomeOriginal: string | undefined
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
    txtBtn: string
}
const styles = (theme: any) => createStyles({
    txtStyle: {
        margin: '1rem'
    },
    btnStyle: {
        marginLeft: '2rem',
        marginRight: '1rem',
        marginBottom: '3rem'
    }
})
class AddEdit extends React.Component<AddEditProps, AddEditState> {
    constructor(props: AddEditProps) {
        super(props);
        try {
            const { id } = this.props.location.state;
            this.state = {
                nome: '',
                nomeOriginal: undefined,
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
                txtBtn: "Editar"
            }
            this.atualizarDados(id as number)
        } catch (error) {
            this.state = {
                nome: '',
                nomeOriginal: undefined,
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
                txtBtn: "Adicionar"
            }
        }
        this.handlerTxtNome = this.handlerTxtNome.bind(this);
        this.handlerTxtQtd = this.handlerTxtQtd.bind(this);
        this.handlerTxtPrecoComp = this.handlerTxtPrecoComp.bind(this);
        this.handlerTxtPrecoVend = this.handlerTxtPrecoVend.bind(this);
    }
    private atualizarDados(id: number) {
        Database.obterProduto(id)
            .then(res => {
                this.setState({
                    nome: res.nome,
                    nomeOriginal: res.nome,
                    quantidade: res.qtd.toString(),
                    precoCompra: res.prcComp.toString(),
                    precoVenda: res.prcVend.toString(),
                    msgNome: '',
                    msgQtd: '',
                    msgPrcC: '',
                    msgPrcV: '',
                    erroNome: false,
                    erroQtd: false,
                    erroPrcC: false,
                    erroPrcV: false,
                })
            })
    }
    private handlerTxtQtd(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            quantidade: e.target.value
        })
        let msg = Verificacao.verificarQtd(e.target.value)
        if (msg != "") {
            this.setState({ erroQtd: true, msgQtd: msg })
        }
        else {
            this.setState({ erroQtd: false, msgQtd: msg })
        }
    }
    private handlerTxtPrecoComp(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            precoCompra: e.target.value
        })
        let msg = Verificacao.verificarPreco(e.target.value)
        if (msg != "") {
            this.setState({ erroPrcC: true, msgPrcC: msg })
        }
        else {
            this.setState({ erroPrcC: false, msgPrcC: msg })
        }
    }
    private handlerTxtPrecoVend(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            precoVenda: e.target.value
        })
        let msg = Verificacao.verificarPreco(e.target.value);
        if (msg != "") {
            this.setState({ erroPrcV: true, msgPrcV: msg });
        }
        else {
            this.setState({ erroPrcV: false, msgPrcV: msg });
        }
    }
    private handlerTxtNome(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            nome: e.target.value
        })
        Verificacao.verificarNome(e.target.value, this.state.nomeOriginal)
            .then(msg => {
                if (msg != "") {
                    this.setState({ erroNome: true, msgNome: msg })
                }
                else {
                    this.setState({ erroNome: false, msgNome: msg })
                }
            });
    }
    render(): JSX.Element {
        const { classes } = this.props;
        return (
            <section>
                <Typography variant="h3" className="text-center">Digite os dados do produto</Typography>
                <form className="formulario border form-group form-check">
                    <Grid container direction="column" alignItems="center">
                        <TextField error={this.state.erroNome} helperText={this.state.msgNome} value={this.state.nome} onChange={this.handlerTxtNome} variant="outlined" label="Nome do Produto" type="text" id="txt-nome" className={classes.txtStyle} />
                        <TextField error={this.state.erroQtd} helperText={this.state.msgQtd} value={this.state.quantidade} onChange={this.handlerTxtQtd} variant="outlined" label="Quantidade" type="text" id="txt-qtd" className={classes.txtStyle} />
                        <TextField error={this.state.erroPrcC} helperText={this.state.msgPrcC} value={this.state.precoCompra} onChange={this.handlerTxtPrecoComp} variant="outlined" label="Preço de Compra" type="text" id="txt-prc-comp" className={classes.txtStyle} />
                        <TextField error={this.state.erroPrcV} helperText={this.state.msgPrcV} value={this.state.precoVenda} onChange={this.handlerTxtPrecoVend} variant="outlined" label="Preço de Venda" type="text" id="txt-prc-vend" className={classes.txtStyle} />
                        <Grid item>
                            <Button variant="contained" color="primary" className={classes.btnStyle} onClick={() => {
                                let nome = this.state.erroNome;
                                let qtd = this.state.erroQtd;
                                let prcComp = this.state.erroPrcC;
                                let prcVend = this.state.erroPrcV;
                                if (nome || qtd || prcComp || prcVend || this.state.nome === '' || this.state.quantidade === '' || this.state.precoCompra === '' || this.state.precoVenda === '') {
                                    return;
                                }
                                else if (this.state.nomeOriginal === undefined) {
                                    Database.adicionarProduto(new Produto(this.state.nome, parseInt(this.state.quantidade), parseFloat(this.state.precoCompra), parseFloat(this.state.precoVenda)));
                                    this.props.history.push('/');
                                }
                                else {
                                    const { id } = this.props.location.state;
                                    Database.editarProduto(id as number, new Produto(this.state.nome, parseInt(this.state.quantidade), parseFloat(this.state.precoCompra), parseFloat(this.state.precoVenda)));
                                    this.props.history.push('/');
                                }
                            }} >{this.state.txtBtn}</Button>
                            <Button className={classes.btnStyle} onClick={() => {
                                this.props.history.push('/');
                            }} variant="contained" color="secondary">Voltar</Button>
                        </Grid>
                    </Grid>
                </form>

            </section>

        );
    }
}

export default withStyles(styles)(AddEdit);