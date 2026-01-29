/***********************************************************************
  * Objetivo: Calcular médias escolares
  * data: 29/01/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/

/*
    Existem tres formas de criação de variáveis

    var     -> Permite a criação de um espaço na memória do tipo variável. 
               foi utilizado muito em projetos antigos.
               Recomendação: Caso você queira utilizar, recomenda-se na 
               criação de variáveis globais(início do código)

    let     -> Permite a criação de um espaço na memória do tipo variável.
               A utilização deste padrão é para a criação dentro de blocos 
               de programação local{ }. Essa variável nasce e morre dentro
               deste bloco.
               Não é recomendado a sua utilização em escopo global.

    const   -> Permite você criar espaço na memória onde não sofrerá alteração
               durante o código. A const pde ser utilizada dentro e fora de 
               bloco{ }. Dica: Caso você queira diferenciar uma const, um
               var ou um let, a const você pode criar com letras MAIÚSCULAS

*/

//Import da Biblioteca
const readline = require("readline");

//Cria o objeto para entrada de dados
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//recebe nome do aluno digitado
entradaDeDados.question(`digite o nome do aluno:`, function (nome) {
    //Variavel local recebe o nome do aluno que foi digitado
    let nomeAluno = nome;

    //Recebe valor da 1° nota digitado
    entradaDeDados.question(`digite a note 1: `, function (valor1) {
        //Variavel local recebe o valor da nota que foi digitado
        let nota1 = valor1

        //Recebe valor da 2° nota digitado
        entradaDeDados.question(`digite a nota 2: `, function (valor2) {
            //Variavel local recebe o valor da nota que foi digitado
            let nota2 = valor2

            //Recebe valor da 3° nota digitado
            entradaDeDados.question(`digite a nota 3: `, function (valor3) {
                //Variavel local recebe o valor da nota que foi digitado
                let nota3 = valor3

                //Recebe valor da 4° nota digitado
                entradaDeDados.question(`digite a nota 4: `, function (valor4) {
                    //Variavel local recebe o valor da nota que foi digitado
                    let nota4 = valor4

                      /*

                   ( == )  ->  Permite comparar a igualdade de duas variaveis 

                   ( < )   ->  Permite comparar valores menores
                   
                   ( > )   ->  Permite comparar valoes maiores
                   
                   ( >= )  ->  Permite comparar valores maiores ou iguais
                   
                   ( <= )  ->  Permite comparar valores menores ou iguais
                   
                   ( != )  ->  Permite comparar a diferença entre os conteúdos
                   
                   ( === ) ->  Permite comparar a igualdade de conteúdos e a igualdade da tipagem de dados
                   
                   ( !== ) ->  Permite comparar a diferença de conteúdos e a igualdade da tipagem de dados
                   
                   ( ==! ) ->  Permite comparar a igualdade de conteúdos e a diferença da tipagem de dados
                   
                   ( !=! ) ->  Permite comparar a diferença de conteúdos e a diferença da tipagem de dados
                   
                    Operadores lógicos
                    E   -> AND -> &&
                    OU  -> OR  -> ||
                    NÃO -> NOT -> !

                   */

                     // Validação de entrada vazia
                     if(nomeAluno == `` || nota1 == `` || nota2 == `` || nota3 == `` || nota4 == ``){
                        console.log(`ERRO: é obrigatório o preenchimento de todos os dados !!!`);
                    }
                    
                    else if(nota1 >"100" || nota2 >"100" || nota3 >"100" || nota4 >"100");{
                    console.log(`ERRO: insira um valor válido abaixo de 100`)

                    else if(nota1 || ){

                    
                    }
                    

                   
                  
                
                    
                })//Fecha a nota 4
            })//Fecha a nota 3
        })//Fecha a nota 2
    })//Fecha a nota 1
});//Fecha o nome