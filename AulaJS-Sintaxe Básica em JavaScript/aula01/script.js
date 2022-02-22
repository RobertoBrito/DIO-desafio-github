 /* // tipos primitivos
                                          // boleano
                                          var boolean = false;
                                          console.log(`A variável ${boolean tem o tipo ${typeof(boolean)}`);
                                          // número
                                          var numero = 1;
                                          console.log(`A variável ${numero} ou tipo ${typeof(numero)}`);
                                          // corda
                                          var nome = 'diana';
                                          console.log(`A variável ${nome} tem o tipo ${typeof(nome)}`);
                                          //função
                                          var funcao = function(){};
                                          console.log(`A variável ${funcao} tem o tipo ${typeof(funcao)}`);
                                          // como declarar
                                          var; // variável global ou local - valor inicial nulo
                                          deixei; // variavel local de bloco - valor inicial nulo
                                          const; // variável local de bloco - valor inicial obrigatório */


 // usando var global
 /* var nome = 'diana';
 var nome = 'Diana';
 // usando var local
 function nomeDaFuncao() {
     var sobrenome = 'Martine';
     console.log(sobrenome);
 }
 console.log(nome);
 nomeDaFuncao(); */

 // as propriedades de var se aplicam a deixar, mas por acontecimento não a escopo local


 /* // usando const
 constante constante = 'constante';
 // valor não pode ser alterado; */



 /* //
 var atribuição = 'diana';
 // comparação
 var comparacao = "0" == 0;
 console.log(comparacao);
 // comparação idêntica
 var comparacaoIdentica = "0" === 0;
 console.log(comparacaoIdentica); */


 /* // operadores aritméticos
  // adição
  var adicao = 1 + 1;
  console.log(adicao);
  //subtração
  var subtração = 2 - 1;
  console.log(subtracao);
  //multiplicação
  var multiplicacao = 2 * 3;
  console.log(multiplicacao);
  //divisão real
  var divisaoReal = 6/2;
  console.log(divisaoReal);
  //divisão inteira
  var divisãoInteira = 5 % 2;
  console.log(divisaoInteira);;
  //potenciação
  var potenciacao = 2**10;
  console.log(potenciacao); */


 /* // operadores relacionais
  // maior que
  var maiorQue = 5 > 2;
  console.log(maiorQue);
  
  // menor que
  var menorQue = 5 < 2;
  console.log(menorQue);
  
  // maior ou igual a
  var maiorOuIgual = 5 >= 2;
  console.log(maiorOuIgual);
  
  // menor ou igual a
  var menorOuIgual = 5 <= 2;
  console.log(menorOuIgual); */


 /* // operadores lógicos
  // && - todos os valores devem ser verdadeiros
  var e = verdadeiro && verdadeiro;
  console.log(e);
  // || - somente um valor deve ser verdadeiro
  var ou = verdadeiro || falso;
  console.log(ou);
  //! - inverter os valores
  var nao = !true;
  console.log(nao); */



 function numMaior(valor1, valor2) {
     if (!valor1 || !valor2) return 'digite números validos'
     const primeiraFrase = criarPrimeiraFrase(valor1, valor2);
     const segundaFrase = criaSegundaFrase(valor1, valor2)

     return `${primeiraFrase} ${segundaFrase}`
 }

 function criarPrimeiraFrase(valor1, valor2) {
     let saoIgauis = '';
     if (valor1 !== valor2) {
         saoIgauis = 'não';
     }
     return `Os números ${valor1} e ${valor2} ${saoIgauis} são iguais `
 }

 function criaSegundaFrase(valor1, valor2) {
     const soma = valor1 + valor2;
     const compara10 = soma > 10;
     const compara20 = soma > 20;
     let resultado10 = 'menor';
     let resultado20 = 'menor';

     if (compara10) {
         resultado10 = 'maior'
     }
     if (compara20) {
         resultado20 = 'maior';
     }
     return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`

 }
 console.log(numMaior());