/*
 add novos elementos
 encontrar elementos
 remover elementos
 dividir elementos
 dividir arrays
 combinas arrays 
 */

const numeros = [1,2,3];

//inicio
numeros.unshift(0);
console.log(numeros);
//meio
numeros.splice(1,0,'a');
console.log(numeros)
//final
numeros.push(5);
console.log(numeros);

//exercicio

const array = [
    1,2,3,4,5,6,7,8,9,10
];

array.unshift('ufa');
console.log(array);

array.splice(5,0,'ed');

array.push('consegui');



