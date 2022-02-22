/*estrutura de repetição 
var jogador1 = 1;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('jogadores validos') : console.log('jogadores Invalidos');
if (jogador1 > 0 && jogador2 == 0) {
    console.log("jogador1 gol");
    placar = jogador1 > jogador2
} else if (jogador2 > 0 && jogador1 == 0) {
    console.log("jogador2 gol");
    placar = jogador2 > jogador1
} else {
    console.log("ninguem marcou ponto!");
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log("jogador1 Ganhou")
        break;

    case placar = jogador2 > jogador1:
        console.log("jogador2 Ganhou")
        break;

    default:
        console.log("Perderam ");

}*/

/*estrutura de repetição */

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5', ];
let object = { pro1: 'valor', pro2: 'valor2', pro3: 'valor3', pro4: 'valor4', }
    /*
    for (let index = 0; index < array.length; index++) {
        console.log(index);
    }
    for (let i in array) {
        console.log(i);
    }
    for (i in object) {
        console.log(i)
    }
for (i of array) {
    console.log(i);
}

for (i of object.pro1) {
    console.log(i);
}



while (a <= 10) {
    a++;
    console.log(a);
}*/
var a = 0
do {
    a++;
    console.log(a);
} while (a <= 10)