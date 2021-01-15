import { AppBar, Button, colors, createMuiTheme, Grid, makeStyles,} from '@material-ui/core';
import React, { Component } from 'react'

export interface Props {

}

export interface State {

}
//@ts-ignore
import logo from "../../utils/img/logo.jpg";



class Cabecario extends React.Component<Props, State> {
    
    render() {
        return (
            <AppBar color="primary" variant="outlined" position="static">
                <Grid container direction="row" justify="space-between">
                    <Grid item> <img alt="Logo" src={logo} /> </Grid>
                    <Grid item className="navbar-dark nav menu">
                        <ul className="lista__menu">
                            <li className="lista__menu__item"><Button variant="contained" color="secondary" href="http://localhost:8080/">Inicio</Button></li>
                            <li className="lista__menu__item"><Button variant="contained" color="secondary" href="http://localhost:8080/Sobre">Sobre-nos</Button></li>
                        </ul>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}

export default Cabecario;