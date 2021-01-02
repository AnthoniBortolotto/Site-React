import React from 'react';
import "../utils/css/bootstrap.min.css";
import "../utils/css/form-add.css";
import "../utils/css/index.css";
import "../utils/css/menu.css";
import "../utils/css/tabela.css";
import Cabecario from "./Header/Cabecario"
export const App: React.FC<{}> = () => (
  <>
    <Cabecario/>
    <section className="produtos">
    </section>
    <footer className="border-top rodape">
        <p className="rodape__texto">Loginha&trade; Todos os direitos reservados &copy; 2020</p>
    </footer>
    </>
);