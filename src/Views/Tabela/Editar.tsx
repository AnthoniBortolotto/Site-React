import React, { Component } from 'react'
import {useParams} from 'react-router-dom'

export interface EditarProps {
    location:any
}
 
export interface EditarState {
    
}
 
class Editar extends React.Component<EditarProps, EditarState> {
    constructor(props:EditarProps)
    {
        super(props)

    }
    render() { 
        const {id} = this.props.location.state;
        console.log(id);
        return ( <p>{id}</p>);
    }
}
 
export default Editar;