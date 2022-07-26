
const marcas = [
    {id:1, nome: 'edmilson'},
    {id:2, nome: 'natalia'}
];

const marca = marcas.find(function(marca){
    return marca.nome === 'edmilson';
});

console.log(marca);

// exercicio

const nomes = [
    {nome: 'edmilson', sobrenome: 'ferreira'},
    {nome: 'natalia', sobrenome: 'simoes'}
];

const nome = nomes.find(function(nome){
    return nome.sobrenome === 'simoes';
});

console.log(nome);