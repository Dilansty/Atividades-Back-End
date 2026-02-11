/***********************************************************************
  * Objetivo: Criar um sistema que permite o cálculo de juros utilizando boas práticas com funções
  * data: 11/02/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/
//import da biblioteca do readline
const readline = require('readline')

//Cria o objeto de entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//entrada nome do cliente
entradaDeDados.question('Digite o nome do cliente: ', function (nome) {
    let nomeCliente = nome

    //entrada nome do produto
    entradaDeDados.question('Digite nome do Produto: ', function (produto) {
        let nomeProduto = produto

        //entrada do valor da compra
        entradaDeDados.question('digite o  valor da compra: ', function (capital) {
            let capitalProduto = capital

            //entrada da taxa de juros
            entradaDeDados.question('digite a taxa de juros a ser aplicada na compra: ', function (taxa) {
                let taxaCompra = taxa

                //entrada do tempo de pagamento 
                entradaDeDados.question('Digite o tempo para realizar o pagamento: ', function (tempo) {
                    let tempoPagamento = tempo

                    //import da biblioteca que realiza cálculos financeiros
                    let calculos = require('./modulo/calculos.js')

                    let montante = calculos.calcularJurosCompostos (capitalProduto, taxaCompra, tempoPagamento)

                
                    if(montante){
                    console.log(`O montante final é: R$${montante}`)
                    entradaDeDados.close()
                }
                else{
                    console.log('ERRO: Devido a problemas no calculo de juros o programa encerrou')
                    entradaDeDados.close()
                }
                })//fecha a entrada do tempo de pagamento

            })//fecha a entrada da taxa de juros

        })//fecha a entrada do valor da compra

    })//fecha a entrada do nome do produto

})//fecha a entrada do nome


