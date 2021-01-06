import React, { Component } from 'react'

export interface DeletarProps {
    location:any
}
 
export interface DeletarState {
    
}
 
class Deletar extends React.Component<DeletarProps, DeletarState> {
    constructor(props:DeletarProps)
    {
        super(props);
    }
    render() { 
        const {id} = this.props.location.state;
        console.log(id);
        return (  <p>Bom dia</p>);
    }
}
 
export default Deletar;