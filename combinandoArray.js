const primeiro = [{id:1}];
const segundo = [4,5,6];
primeiro[0].id = 10;
//combinar os dois arrays:
const combinado = primeiro.concat(segundo);
console.log(primeiro);
console.log(segundo);
console.log(combinado);

//dividir o array

const cortado = combinado.slice(1);
console.log(cortado);