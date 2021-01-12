import React, { Component, lazy } from 'react'
import { Link, Route } from 'react-router-dom';
import Database from "../../Models/Database";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button/'
export interface TabelaProps {

}

export interface TabelaState {
    produtos: unknown[],

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
                    <TableRow key={index}>
                        <TableCell key={index}>{dado.nome}</TableCell>
                        <TableCell key={index}>{dado.qtd}</TableCell>
                        <TableCell key={index}>R$ {dado.prcComp}</TableCell>
                        <TableCell key={index}>R$ {dado.prcVend}</TableCell>
                        <TableCell><Link to={{ pathname: '/Editar', state: { id: index } }} className="tabela__icone-lapis"></Link><Link to={{ pathname: '/Deletar', state: { id: index } }} className="tabela__icone-lixo"></Link></TableCell>
                    </TableRow>)
            })
        )
    }

    render(): JSX.Element {
        return (
            <Grid container direction="column">
                <TableContainer className="produtos">

                    <Grid item>
                        <Typography variant="h3" className="text-center titulo">Bem vindo a lojinha</Typography>
                    </Grid>
                    <Grid item>
                        <Table className="table table-bordered tabela">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome do produto</TableCell>
                                    <TableCell>Quantidade</TableCell>
                                    <TableCell>Preço de compra</TableCell>
                                    <TableCell>Preço de venda</TableCell>
                                    <TableCell>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody id="corpo-tabela">
                                {this.montarTabela()}
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="secondary">Adicionar Produto</Button>
                        {/* <Link to="/Adicionar" type="button" id="btn-pag-add" className="btn btn-info botao-add">Adicionar Produto</Link> */}
                    </Grid>
                </TableContainer>
            </Grid>);
    }
}

export default Tabela;