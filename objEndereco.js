//criar um obj endereco que contem
// rua
// cidade
// cep
// exibirEndereco

let endereco = {
    rua: 'Av Quintino Bocaiuva',
    cidade: 'São Vicente',
    CEP: 11320010
};


function exibirEndereco(endereco) {
    for (let chave in endereco)
        console.log(chave,endereco[chave]);
}

exibirEndereco(endereco);