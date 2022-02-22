/* Atividade 2
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, rendimento -1.

Exemplo: Entrada -> [1, 3, 4, 6, 80, 33, 23, 90]

Saída -> [1, 3, 0, 0, 0, 33, 23, 0]

Entrada -> []

Saída -> -1 */

function substituiPares(arrayNum) {
    if (!arrayNum) return -1;
    if (!arrayNum.length) return -1;

    for (let i = 0; i < arrayNum.length; i++) {
        if (arrayNum[i] === 0) {
            console.log("você já é zero!")
        } else if (arrayNum[i] % 2 === 0) {
            console.log(`Substituindo ${arrayNum[i]} por 0....`);
            arrayNum[i] = 0;
        }
    }
    return arrayNum;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90, 0, 0, 0, 0, 0];
console.log(substituiPares(null));