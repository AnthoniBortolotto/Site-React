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
                key++;
            })
        }).then(res => {return key}); 
    }
    
    public static adicionarProduto(produto:Produto):void
    {
        let key = this.keyDisponivel(); 
        key.then(res => set(res, produto, this.ObterDB()));
    }
    
    public static async dadosTabela(): Promise<unknown[]>
    {
        let produtos:Array<unknown> = [];
        let key = 0;
        let keyDisponivel = await this.keyDisponivel();
        await console.log(keyDisponivel);
        let objeto = await get(key, this.ObterDB());
        while(objeto !== undefined)
        {
            await produtos.push(objeto);
            key++;
            objeto = await get(key, this.ObterDB());
        }
        return produtos;
    }
}
export default Database;
