import { AppBar, colors, createMuiTheme, Grid, makeStyles,} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { classicNameResolver } from 'typescript';

export interface Props {

}

export interface State {

}
//@ts-ignore
import logo from "../../utils/img/logo.jpg";



class Cabecario extends React.Component<Props, State> {
    
    render() {
        // const useStyles = makeStyles(({
        //     AppBarStyle:{
        //       backgroundColor: "#2e7d32"
        //    }  
        //   }));
        //const classes = useStyles();
        return (
            <AppBar color="primary" variant="outlined" position="static">
                <Grid container direction="row" justify="space-between">
                    <Grid item> <img alt="Logo" src={logo} /> </Grid>
                    <Grid item className="navbar-dark nav menu">
                        <ul className="lista__menu">
                            <li className="lista__menu__item"><a href="http://localhost:8080/" className="btn btn-info lista__menu__item__ancora">Inicio</a></li>
                            <li className="lista__menu__item"><Link to="/Sobre" type="button" className="btn btn-info lista__menu__item__ancora">Sobre-nos</Link></li>
                        </ul>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}

export default Cabecario;