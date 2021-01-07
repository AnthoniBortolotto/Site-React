import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Database from '../../Models/Database';
import Produto from '../../Models/Produto';


export interface IEditarState{
    id:number
}
export interface IEditarLocation{
    state:IEditarState
}
export interface EditarProps {
    location:IEditarLocation
}
 
export interface EditarState {
    nome:string,
    quantidade:string,
    precoCompra:string,
    precoVenda:string
}
 
class Editar extends React.Component<EditarProps, EditarState> {
    constructor(props:EditarProps)
    {
        super(props)
            this.state = {
                nome: "",
                quantidade: '0',
                precoCompra: '0',
                precoVenda:  '0'
            }
        this.atualizaDados();
        this.handlerTxtNome = this.handlerTxtNome.bind(this);
        this.handlerTxtQtd = this.handlerTxtQtd.bind(this);
        this.handlerTxtPrecoComp = this.handlerTxtPrecoComp.bind(this);
        this.handlerTxtPrecoVend = this.handlerTxtPrecoVend.bind(this);
    }
    private atualizaDados(){
        const {id} = this.props.location.state;
        Database.obterProduto(id).then(res =>{
            this.setState({
                nome: res.nome,
                quantidade: res.qtd.toString(),
                precoCompra: res.prcComp.toString(),
                precoVenda: res.prcVend.toString()
            })
        });
    }
    private eventoBtnEdt(){
        const {id} = this.props.location.state;
        Database.editarProduto( id ,new Produto(this.state.nome, parseInt(this.state.quantidade),parseFloat(this.state.precoCompra),parseFloat(this.state.precoVenda)));
    }
    private handlerTxtQtd(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value);
        this.setState({
            quantidade: e.target.value
        })
    }
    private handlerTxtPrecoComp(e:React.ChangeEvent<HTMLInputElement>){
        this.setState({
            precoCompra: e.target.value
        })
    }
    private handlerTxtPrecoVend(e:React.ChangeEvent<HTMLInputElement>){
        this.setState({
            precoVenda: e.target.value
        })
    }
    private handlerTxtNome(e:React.ChangeEvent<HTMLInputElement>){
        this.setState({
            nome: e.target.value
        })
    }
    render() { 
        
        return ( <section>
            
            <h3 className="text-center">Digite os dados do produto</h3>
       <form className="formulario border form-group form-check">
           <label className="formulario__etiqueta form-check-label">Nome do produto:</label>
           <input type="text" value={this.state.nome} onChange={this.handlerTxtNome} id="txt-nome" className="formulario__txt"/>
           <label className="formulario__etiqueta form-check-label">Quantidade: </label>
           <input type="text" value={this.state.quantidade} onChange={this.handlerTxtQtd} id="txt-qtd" className="formulario__txt"/>
           <label className="formulario__etiqueta form-check-label">Preço de Compra:</label>
           <input type="text" value={this.state.precoCompra} onChange={this.handlerTxtPrecoComp} id="txt-prc-comp" className="formulario__txt"/>
           <label className="formulario__etiqueta form-check-label">Preço de Venda:</label>
           <input type="text" id="txt-prc-vend"  value={this.state.precoVenda} onChange={this.handlerTxtPrecoVend} className="formulario__txt"/>
           <Link  onClick={this.eventoBtnEdt.bind(this)} to="/" type="button" id="btn-edit" className="btn btn-info formulario__btn__edit">Editar</Link>
           <Link to="/" type="button" id="btn-voltar"  className="btn btn-danger formulario__btn__voltar">Voltar</Link>
       </form> 
       
       </section>);
    }
}
 
export default Editar;