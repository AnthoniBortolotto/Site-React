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
            mensagens.push("O campo nome deve estar preenchido");
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
    static verificarQtd(qtd:string, mensagens:Array<string>): string[]
    {
        if(qtd == ""){
            mensagens.push("O campo quantidade deve estar preenchido");
        }
        else if(/[^\d]/.test(qtd))
        {
            mensagens.push("Apenas numeros são permitidos no campo quantidade");
        }
        return mensagens;
    } 
    static verificarPrcComp(prc:string , mensagens:Array<string>): string[]
    {
        if(prc == "")
        {
            mensagens.push("O campo Preço de compra deve estar preenchido");
        }
        else if(!/^\d+(.\d\d)?$/.test(prc))
        {
            mensagens.push("Você precisa digitar um preço de compra válido");
        }
        return mensagens;
    }
    static verificarPrcVend(prc:string, mensagens:Array<string>): string[]
    {
        if(prc == "")
        {
            mensagens.push("O campo Preço de venda deve estar preenchido");
        }
        else if(!/^\d+(.\d\d)?$/.test(prc))
        {
            mensagens.push("Você precisa digitar um preço de venda válido");
        }
        return mensagens;
    }
}
export default Verificacao;