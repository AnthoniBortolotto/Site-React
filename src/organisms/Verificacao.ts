import Database from "../molecules/Database";

class Verificacao {
    public static async verificarNome(nome: string, nomeOriginal: string | undefined) {
        if (nome == "") {
            return "O campo deve estar preenchido";
        }
        else if (/[^a-z|A-Z|ã|â|ê|õ|ç]/.test(nome)) {
            return "É apenas permitido letras";
        }
        else //testar se funciona
        {
            if (nomeOriginal === undefined) {
                return Database.procurarProduto(nome).then(res => {
                    if (res) {
                        return "já existe um produto com esse nome";
                    };
                    return '';
                })
            }
            else {
                return Database.procurarProdutoEditar(nome, nomeOriginal).then(res => {
                    if (res) {
                        return "já existe um produto com esse nome";
                    };
                    return ''
                })
            }
        }
        return '';
    }
    static verificarQtd(qtd: string){
        if (qtd == "") {
            return "O campo deve estar preenchido";
        }
        else if (! /^[\d]+$/.test(qtd)) {
            return "Apenas numeros são permitidos";
        }
        return '';
    }
    static verificarPreco(prc: string){
        if (prc == "") {
            return "O campo deve estar preenchido";
        }
        else if (!/^\d+(.\d\d)?$/.test(prc)) {
            return "Digite um valor válido";
        }
        return '';
    }
}
export default Verificacao;