import React, { Component } from 'react'

export interface Props {

}

export interface State {

}

class Rodape extends React.Component<Props, State> {
    render() {
        return (
            <footer className="border-top rodape">
                <p className="rodape__texto">Loginha&trade; Todos os direitos reservados &copy; 2020</p>
            </footer>
        );
    }
}

export default Rodape;