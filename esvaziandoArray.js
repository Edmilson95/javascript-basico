//esvaziando array

// let numeros = [1,2,3,4,5,6];
// let outros = numeros;

// //solução 01
// numeros = [];
// console.log(outros);

//solucao 02

// numeros.length = 0;
// console.log(numeros);
// console.log(outros);

//solucao 03
// numeros.splice(0,numeros.length);
// console.log(numeros);
// console.log(outros);

// solucao 04
// while (numeros.length > 0)
//     numeros.pop();

let notas = [10,5,10,3,8,9];
console.log(notas);

// const semNotas = notas.length = 0;
// console.log(semNotas);

notas.splice(0,notas.length);
console.log(notas);