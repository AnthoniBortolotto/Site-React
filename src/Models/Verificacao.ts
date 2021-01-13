import Database from "./Database";

class Verificacao {
    static async verificarNome(nome: string): Promise<"" | "já existe um produto com esse nome" | "O campo nome deve estar preenchido" | "Não é permitido em nome numeros ou caracteres especiais"> {
        if (nome == "") {
            return "O campo nome deve estar preenchido";
        }
        else if (/[^a-z|A-Z|ã|â|ê|õ|ç]/.test(nome)) {
            return "Não é permitido em nome numeros ou caracteres especiais";
        }
        else //testar se funciona
        {
            return Database.procurarProduto(nome).then(res => {
                if (res) {
                    return "já existe um produto com esse nome";
                };
                return '';
            })
        }
        return '';
    }
    public static async verificarNomeEditar(nome: string, nomeOriginal: string): Promise<"" | "já existe um produto com esse nome" | "O campo nome deve estar preenchido" | "Não é permitido em nome numeros ou caracteres especiais"> {
        if (nome == "") {
            return "O campo nome deve estar preenchido";
        }
        else if (/[^a-z|A-Z|ã|â|ê|õ|ç]/.test(nome)) {
            return "Não é permitido em nome numeros ou caracteres especiais";
        }
        else //testar se funciona
        {
            return Database.procurarProdutoEditar(nome, nomeOriginal).then(res => {
                if (res) {
                    return "já existe um produto com esse nome";
                };
                return ''
            })
        }
        return '';
    }
    static verificarQtd(qtd: string): "" | "O campo quantidade deve estar preenchido" | "Apenas numeros são permitidos no campo quantidade" {
        if (qtd == "") {
            return "O campo quantidade deve estar preenchido";
        }
        else if (! /^[\d]+$/.test(qtd)) {
            return "Apenas numeros são permitidos no campo quantidade";
        }
        return '';
    }
    static verificarPrcComp(prc:string): "" | "O campo Preço de compra deve estar preenchido" | "Você precisa digitar um preço de compra válido" {
        if (prc == "") {
            return "O campo Preço de compra deve estar preenchido";
        }
        else if (!/^\d+(.\d\d)?$/.test(prc)) {
            return "Você precisa digitar um preço de compra válido";
        }
        return '';
    }
    static verificarPrcVend(prc: string): "" | "O campo Preço de venda deve estar preenchido" | "Você precisa digitar um preço de venda válido" {
        if (prc == "") {
            return "O campo Preço de venda deve estar preenchido";
        }
        else if (!/^\d+(.\d\d)?$/.test(prc)) {
            return "Você precisa digitar um preço de venda válido";
        }
        return '';
    }
}
export default Verificacao;