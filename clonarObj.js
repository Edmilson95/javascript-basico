const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function() {
        console.log("Fazendo ligação...")
    }
}

const novoObjeto = Object.assign({
    bateria: 5000
}, celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2);

const aparelhoIphone = {
    modelo: '8 Plus',
    ano: 2018,
    fabricante: 'Apple'
}
console.log(aparelhoIphone)

const aparelhoIphone2 = {...aparelhoIphone};
console.log(aparelhoIphone2);

const aparelhoIphone3 = Object.assign({
    bateria: 2000
}, aparelhoIphone)
console.log(aparelhoIphone3);