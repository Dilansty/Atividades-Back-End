
//COMENTÁRIO EM LINHA

/*
 COMENTÁRIO EM BLOCO
*/


//imprime no terminal o conteúdo
console.log('testando o print do console');

//permite criar uma variável
var nome = "Allan";

console.log(nome);

//formas de concatenar variáveis e texto
console.log("o nome do usuário é: " + nome);
console.log(`o nome do usuário é: ${nome} `);

//import da biblioteca para captar entrada de dados via terminal
var readline = require("readline");
const { callbackify } = require("util");

//Cria uma interface para entrada e saída de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Função para retornar o nome digitado no terminal
//O método question após a digitação chama a asua função "CALL BACK"
//para entregar o que foi digitado no terminal, através do argumento "nomeUsuario"
entradaDeDados.question("Por favor digitar o seu nome: ", function (nomeUsuario) {
    console.log('O nome do usuário é: ' + nomeUsuario);

    //Entrada de dados para o email
    entradaDeDados.question("Digite seu E-mail: ", function (emailUsuario) { 
    console.log(`O Email informado é:  ${emailUsuario}`);
});

});
