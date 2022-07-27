//removendo elementos de um array

const numeros = [1,2,3,4,5,6];
numeros.push();
numeros.unshift();
numeros.splice();

//final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);

//inicio
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

//meio
const meio =numeros.splice(2,1);
console.log(meio);
console.log(numeros);


const alfabeto = [
    'a','b','c','d','e','f','g'
];

console.log(alfabeto);

const meio2 = alfabeto.splice(5,2);
console.log(meio2);
console.log(alfabeto);

const inicio2 = alfabeto.shift();
console.log(inicio2);
console.log(alfabeto);

const final2 = alfabeto.pop();
console.log(final2);
console.log(alfabeto);