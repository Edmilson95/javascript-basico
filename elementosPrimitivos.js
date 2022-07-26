
const numeros = [1,2,3,4];
console.log(numeros.indexOf(2) !== -1);

console.log(numeros.includes(2));

//numeros.lastIndexOf

const letras = ['a','b','c','d'];

console.log(letras.indexOf('e'));//retorna o indice(se nao tiver, volta -1)

console.log(letras.lastIndexOf('a')); // retorna o indice(se tiver)

console.log(letras.includes(2)); //retorna true false