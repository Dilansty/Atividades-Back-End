/***********************************************************************
  * Objetivo: 
  * data: 29/01/2026
  * Autor: Allan de Sousa Almeida
  * Versão: 1.0
 ***********************************************************************/
let valorPercentual = 10
//import da biblioteca de calculos financeiros
let calculos = require('./modulo/calculos.js')

let percentual = calculos.calcularPercentual(valorPercentual)


console.log(percentual)