import Database from "./Database";

class Verificacao{
    static verificarNome(nome:string, mensagens:Array<string>)
    {
        if(nome == ""){
            mensagens.push("todos os campos devem estar preenchidos");
        }
        else if(/[^a-z|A-Z|ã|â|ê|õ|ç]/.test(nome))
        {
            mensagens.push("Não é permitido em nome numeros ou caracteres especiais");
        }
        else //testar se funciona
        {
            Database.procurarProduto(nome).then(res =>{
                if(res) {
                    mensagens.push("já existe um produto com esse nome");
                    console.log("È true");
                };
            })
            
            
        }
        return mensagens;
    }   
    public static async verificarNomeEditar(nome:string, mensagens:Array<string>, nomeOriginal:string): Promise<string[]>
    {
        if(nome == ""){
            mensagens.push("todos os campos devem estar preenchidos");
        }
        else if(/[^a-z|A-Z|ã|â|ê|õ|ç]/.test(nome))
        {
            mensagens.push("Não é permitido em nome numeros ou caracteres especiais");
        }
        else //testar se funciona
        {
           return Database.procurarProdutoEditar(nome, nomeOriginal).then(res =>{
                if(res) {
                    mensagens.push("já existe um produto com esse nome");
                };
                return mensagens
            })
        }
        return mensagens
    } 
    static verificarQtd(qtd:string): boolean
    {
        return false;
    } 
    static verificarPrcComp(prc:string): boolean
    {
        return false;
    }
    static verificarPrcVend(prc:string): boolean
    {
        return false;
    }
}
export default Verificacao;