import React from 'react';
import "./css/bootstrap.min.css";
import "./css/form-add.css";
import "./css/index.css";
import "./css/menu.css";
import "./css/tabela.css";
import logo from "./img/logo.jpg";
export const App: React.FC<{}> = () => (
  <>
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
    <section className="produtos">
    </section>
    <footer className="border-top rodape">
        <p className="rodape__texto">Loginha&trade; Todos os direitos reservados &copy; 2020</p>
    </footer>
    </>
);