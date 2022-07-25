//objeto de postam de blog que vai conter as seguintes propriedades
/*
titulo
mensagem
autor
visualizacoes
comentario
    (autor,mensagem)
    estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios: [
        {autor: 'a',mensagem: 'b'},
        {autor: 'a',mensagem: 'b'}
    ],
    estaAoVivo: true
}

console.log(postagem);

let objeto = {
    titulo: 'titulo',
    mensagem: 'bgl dificil',
    autor: 'edmilson',
    visualizacoes: 100,
    cometarios: [
        {autor: 'ota', mensagem: 'fu'},
        {autor: 'miga', mensagem: 'oq'}
    ]
}

console.log(objeto);