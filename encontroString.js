// criar um método para ler propriedades de um objeto 
// exibir somente as propriedades do tipo string que estçao nesse objeto


const filme /*OBJETO*/ = {
    //nome da propriedade: valor da propriedade
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
exibirPropriedades(filme);

function exibirPropriedades(objeto) {
    for (propriedades in objeto)
        if(typeof objeto[propriedades] === 'string')
            console.log(propriedades, objeto[propriedades]);
}