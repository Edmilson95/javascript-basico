

function VerificarEntrada() {
    nomeConvidado = document.getElementById('nome').value;
    convidadosCristian = ['Amanda','Edmilson', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan'];
    if (convidadosCristian.includes(nomeConvidado)) {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você pode entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não pode entrar!'
    }
}