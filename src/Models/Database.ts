import Produto from "./Produto";
import {Store, set, get} from "idb-keyval";
class Database
{
    private static ObterDB(): Store{
        return new Store('Loja', 'Estoque');
    }
    private static keyDisponivel() : number{
        let key = 0;
        let valorStore = get(key, this.ObterDB())
        let existe = false;
        do{
            valorStore.then(res => {
                if(res === undefined) existe = false
                else{ 
                    existe = true;
                    key++;
                };
            });
        }while(existe);
        return ++key;   
    }
    
    public static adicionarProduto(produto:Produto):void
    {
        let key = this.keyDisponivel(); 
        set(key,produto, this.ObterDB());
    }
    
    public static dadosTabela()
    {
    
    }
}
export default Database;
