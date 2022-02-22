/*Atividade 2: Esta
Dada a função calculaIdade, utilize os métodos call e aplique para modificar o valor de this. Crie seus próprios objetos para esta atividade!*/

function calculaIdade(anos) {
    return `Daqui a ${ anos } anos, ${ this . nome } terá ${ 
this . idade + anos } anos de idade.`;
}

const pessoa1 = {
    nome: 'MAria',
    idade: 30
}
const pessoa2 = {
    nome: 'beto',
    idade: 25
}

const animal = {
    nome: 'Apolo',
    idade: 2,
    raca: 'Pug'
}

//console.log(calculaIdade.call(animal, 30));

console.log(calculaIdade.apply(pessoa1, [6]));