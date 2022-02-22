/*Atividade 2: Conjuntos
Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], rendimentos outro array apenas com valores únicos.*/

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valores(arr) {
    const mySet = new Set(arr);
    return [...mySet];

}
console.log(valores(array));