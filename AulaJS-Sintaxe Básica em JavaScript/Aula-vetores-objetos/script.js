//vetores arrays
/*
let array = ['String', 1, true];
console.log(array);*/

let array = ['String', 1, true, ['array1'],
    ['array2'],
    ['array3'],
    ['array4'],
];
//console.log(array[0]);
//percorre todo o array
//array.forEach(function(item, index) { console.log(item, index) })

/*array.push('novo item');
console.log(array); adicionr novo item no fim do arrau*/
/*
array.pop();
console.log(array);*/
/*
• shift() – remove item no início do array;
array.shift();
console.log(array);
*/
/*
• unshift() – add item no início do array;
array.unshift('novo inicio');
console.log(array);
*/

/*• indexOf() – retorna o índice de um valor;
console.log(array.indexOf(true));
 */

/*splice() – remove ou substitui um item pelo índice;
array.splice(0, 3);
console.log(array);
*/


/*
slice() – retorna uma parte de um array existente;
let novoArray = array.slice(0, 3);

console.log(novoArray);
*/

let object = {
    String: 'Test',
    Number: 1,
    Boolean: true,
    array: ['array'],
    objectInterno: { objetoInterno: 'objeto Interno' }
};
/*
console.log(object);

var String = object.String;
console.log(String);

var arrayInterno = object.array;
console.log(arrayInterno);
*/
var { Number, Boolean } = object;
console.log(Number, Boolean)