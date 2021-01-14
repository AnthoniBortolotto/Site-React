import { createStyles, Grid, withStyles, WithStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Database from '../../Models/Database';
import "../../utils/css/deletar.css";

export interface IDeletarState{
    produto:Promise<unknown>
    id:number
}
export interface IEditarLocation{
    state:IDeletarState
}
export interface DeletarProps extends WithStyles<typeof styles> {
    location:IEditarLocation
}
 
export interface DeletarState {
    
}
const styles = (theme:any) => createStyles({})
class Deletar extends React.Component<DeletarProps, DeletarState> {
    
    constructor(props:DeletarProps)
    {
        super(props);
        this.deletar = this.deletar.bind(this);
    }
    private deletar(): void
    {
        const {id} = this.props.location.state;
       Database.deletarProduto(id);
    }
    render(): JSX.Element { 
        const { classes } = this.props;
        return (  <Grid container alignItems="center" direction="column">
            <Grid item><Typography variant="h3">Você tem certeza que deseja deletar este produto?</Typography></Grid>
            <Grid item><Link onClick={this.deletar} to="/" className="btn btn-danger deletar__sim">Sim</Link>
            <Link to="/" className="btn btn-info deletar__nao">Não</Link></Grid>
        </Grid>);
    }
}
 
export default withStyles(styles)(Deletar);