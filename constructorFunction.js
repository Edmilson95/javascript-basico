/*
criar um objeto
titulo, mensagem, autor, visualizacoes, comentario,estaaovivo*/

// let exercicio = {
//     titulo: 'Exercicio',
//     mensagem: 'jaja to bom',
//     autor: 'edmilson',
//     visualizacoes: 220,
//     comentarios: [
//         {autor: 'telespectador', mensagem: 'bora que bora'},
//         {autor2: 'telespectador2', mensagem: 'bora que bora puto'}
//     ],
//     estaAoVivo: true
// }

// console.log(exercicio);

function Postagem(titulo,mensagem,autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}

let postagem = new Postagem('a','b','c');
console.log(postagem);


//hora video 3H28... faixa de preço