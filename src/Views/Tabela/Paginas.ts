import Produto from "../../Models/Produto";
import {Adicionar} from "../../Models/Database";
import {Iniciar} from "./index"
export default class Paginas {
    
    public static pagTabela():void
    {
        let section = document.querySelector(".produtos");
        section.innerHTML = ;
        this.eventoBotaoAddPag();
    }
    public static eventoBotaoAddPag()
    {
        let botaoAdd = document.querySelector('#btn-pag-add');
        botaoAdd.addEventListener('click', () => this.pagAdd());
    }
    public static pagAdd()
    {
        let section = document.querySelector(".produtos");
        section.innerHTML = ``;
        this.eventoBtnAdd();
        this.eventoBtnVoltar();
    }
    private static eventoBtnAdd()
    {
        let nome = <HTMLInputElement>document.querySelector("#txt-nome");
        let qtd = <HTMLInputElement>document.querySelector("#txt-qtd");
        let prcComp = <HTMLInputElement>document.querySelector("#txt-prc-comp");
        let prcVend = <HTMLInputElement> document.querySelector("#txt-prc-vend");
        let botao = document.querySelector("#btn-add");
        //bug aqui
        //prcCompParsed e prcVendParsed são undefined
        botao.addEventListener('click', () => {
            let produtoNovo = new Produto(nome.value, parseInt(qtd.value), Number.parseFloat(prcComp.value), Number.parseFloat(prcVend.value));      
            Adicionar(produtoNovo);
            Iniciar();
        });  
    }
    private static eventoBtnVoltar()
    {
        let botao = document.querySelector("#btn-voltar");
        botao.addEventListener('click', () => Iniciar());
    }
}