//divisivel por 3 = Fizz
//divisivel por 5 = Buzz
//divisivel por 3 e 5 = FizzBuzz
//Nao divisivel por 3 e 5 = entrada
//não é um numero = 'Nao é um numero'


const resultado =fizzBuzz(false);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um numero';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';

    return entrada;

}