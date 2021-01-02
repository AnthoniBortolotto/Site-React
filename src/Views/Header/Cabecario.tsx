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
            <header className="toast-header">
                <img alt="Logo" src={logo} />
                <nav className="navbar-dark nav menu">
                    <ul className="lista__menu">
                        <li className="lista__menu__item"><a className="btn btn-info lista__menu__item__ancora">Inicio</a></li>
                        <li className="lista__menu__item"><a className="btn btn-info lista__menu__item__ancora">Sobre-nos</a></li>
                        <li className="lista__menu__item"><a className="btn btn-info lista__menu__item__ancora">Apoie-nos</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Cabecario;