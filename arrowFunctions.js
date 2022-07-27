const marcas = [
    {id:1, nome: 'a'},
    {id:2, nome: 'b'}
];

console.log(marcas.find((marca) => marca.nome === 'b'));

const nomes = [
    {nome: 'edmilson', sobrenome: 'ferreira'},
    {nome: 'natalia', sobrenome: 'simoes'}
];

console.log(nomes.find((nome) => nome.sobrenome === 'edmilson'));

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));