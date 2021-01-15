import React from 'react'
import { Link} from 'react-router-dom';
import Database from "../molecules/Database";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid,Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button/'
import {createStyles, withStyles, WithStyles } from "@material-ui/core/styles";



export interface TabelaProps extends WithStyles<typeof styles> {

}

export interface TabelaState {
    produtos: unknown[],

}

const styles = (theme:any) => createStyles({
    btnStyles: {
        marginTop: '3rem',
        '&:hover': {
            color: '#ffffff'
        },
        [theme.breakpoints.up('xs')]: {
            marginLeft: '1rem',
        },
        [theme.breakpoints.up('sm')]: {
            marginLeft: '12rem',
        },
        [theme.breakpoints.up('md')]: {
            marginLeft: '15rem',
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: '17rem',
        },
        [theme.breakpoints.up('xl')]: {
            marginLeft: '19rem',
        }

    },
    tableCellStyle: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '11pt',
        textAlign: 'center'
    }
});
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
        const { classes } = this.props;
        return (
            this.state.produtos.map((dado: any, index) => {
                return (
                    <TableRow key={index}>
                        <TableCell className={classes.tableCellStyle} key={index}>{dado.nome}</TableCell>
                        <TableCell className={classes.tableCellStyle} key={index}>{dado.qtd}</TableCell>
                        <TableCell className={classes.tableCellStyle} key={index}>R$ {dado.prcComp}</TableCell>
                        <TableCell className={classes.tableCellStyle} key={index}>R$ {dado.prcVend}</TableCell>
                        <TableCell><Link to={{ pathname: '/AddEdit', state: { id: index } }} className="tabela__icone-lapis"></Link><Link to={{ pathname: '/Deletar', state: { id: index } }} className="tabela__icone-lixo"></Link></TableCell>
                    </TableRow>)
            })
        )
    }

    render(): JSX.Element {

        const { classes } = this.props;
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
                                    <TableCell className={classes.tableCellStyle}>Nome do produto</TableCell>
                                    <TableCell className={classes.tableCellStyle}>Quantidade</TableCell>
                                    <TableCell className={classes.tableCellStyle}>Preço de compra</TableCell>
                                    <TableCell className={classes.tableCellStyle}>Preço de venda</TableCell>
                                    <TableCell className={classes.tableCellStyle}>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody id="corpo-tabela">
                                {this.montarTabela()}
                            </TableBody>
                        </Table>
                    </Grid>
                    <Grid item>
                        <Button className={classes.btnStyles} href="http://localhost:8080/AddEdit" variant="contained" color="primary">Adicionar Produto</Button>
                    </Grid>
                </TableContainer>
            </Grid>);
    }
}

export default withStyles(styles)(Tabela);