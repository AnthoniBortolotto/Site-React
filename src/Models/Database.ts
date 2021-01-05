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
    
    public static async dadosTabela()
    {
        let produtos:Array<any> = [];
        let key = 0;
        let produto;
        let keyDisponivel = await this.keyDisponivel();
        while(key < keyDisponivel);
        {
            let objeto = await get(key, this.ObterDB());
            produtos.push(objeto);
            key++;
        }
        await console.log(produtos);
        // this.keyDisponivel().then(res => {
        //     while(res !== key)
        //     {
        //         get(key, this.ObterDB()).then(valor => produtos.push(valor))
        //     }
        //     console.log(produtos);
        //     return produtos;
        // })
    }
}
export default Database;
