import Produto from "./Produto";
import {Store, set, get, keys} from "idb-keyval";
class Database
{
    private static ObterDB(): Store{
        return new Store('Loja', 'Estoque');
    }
    private static keyDisponivel(){
        let key = 0;
        return keys(this.ObterDB()).then(res => {
            res.forEach(chave => {
                console.log(chave);
                key++;
            })
        }).then(res => {return key}); 
    }
    
    public static adicionarProduto(produto:Produto):void
    {
        let key = this.keyDisponivel(); 
        key.then(res => set(res, produto, this.ObterDB()));
    }
    
    public static dadosTabela()
    {
    
    }
}
export default Database;
