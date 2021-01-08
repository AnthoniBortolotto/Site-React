import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export interface Props {

}

export interface State {

}
//@ts-ignore
import logo from "../../utils/img/logo.jpg";

class Cabecario extends React.Component<Props, State> {
    render() {
        return (
            <header className="toast-header">
                <img alt="Logo" src={logo} />
                <nav className="navbar-dark nav menu">
                    <ul className="lista__menu">
                        <li className="lista__menu__item"><a href="http://localhost:8080/" className="btn btn-info lista__menu__item__ancora">Inicio</a></li>
                        <li className="lista__menu__item"><Link to="/Sobre" type="button" className="btn btn-info lista__menu__item__ancora">Sobre-nos</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Cabecario;