const primeiro = [1,2,3];
const segundo = [4,5,6];

// const combinado = primeiro.concat(segundo);
const combinado = ['dimi',...primeiro,'ed',...segundo];
console.log(combinado);
// const cortado = combinado.slice();
const clonado = [...combinado];
console.log(clonado);
//spread 


const exercicio = [1,2,3,'%',4,5,6];
console.log(exercicio);

const cloneExercicio = [...exercicio];
console.log(cloneExercicio);
