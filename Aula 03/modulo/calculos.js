/***********************************************************************
  * Objetivo: Arquivo responsável pelas funções de calculos para este projeto
  * Autor: Allan de Sousa Almeida
  * data: 11/02/2026
  * Versão: 1.0
 ***********************************************************************/

//criando uma função para calcular o valor da compra parcelada
//método tradicional de criar uma função
function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto) {

    //Recebe os argumentos da função em variáveis locais    
    //As variaveis (valor,taxa e tempo são numéricas por conta da conversão) 
    // mas os argumentos(valorCompra, taxaJuros, tempoPagto ainda serão Strings)
    let valor = Number(valorCompra)
    let taxa = Number(taxaJuros)
    let tempo = Number(tempoPagto)

 
    //validação para entradas vazias ou de caracteres inválidos
    if (valorCompra == '' || isNaN(valorCompra) || tempoPagto == '' || isNaN(tempoPagto)) {
       console.log('ERRO: Valores de compra ou tempo de pagamento estão incorretos')
        return false
    }
    else {

        //chamar a função para converter o numero em percentual
        let percentual = calcularPercentual(taxa)

        //validação para o erro do percentual na função calcularPercentual()
        if (percentual) {
            let montante = valor * ((1 + percentual) ** tempo)
            return Number(montante.toFixed(2))
        }
        else {
            console.log('ERRO: Valor da taxa está incorreto!')
            return false
        }
    }
}//fechamento da função de calcular juros compostos

//função para Calcular o percentual de um número
function calcularPercentual(numero) {
    let numeroPercentual = Number(numero)

    //Validação para verificar se é um número válido
    if (numero == '' || numero <= 0 || isNaN(numero)) {
        //console.log('ERRO: Valor de taxa está vazio ou incorreto')
        return false // não pode processar
    }
    else {
        //processamento do cálculo do percentual
        let percentual = numeroPercentual / 100
        return Number(percentual.toFixed(2))
    }


}//fechamento da função de calcular percentual

//tornando as duas funções publicas para o projeto
module.exports = {
    calcularJurosCompostos,
    calcularPercentual
}