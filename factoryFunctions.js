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

//Factory Functions (FUNÇÃO DE FABRICA)

function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...");
        }
    }
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular);

function criarTelevisao(marcaTV, TamanhoTV, modeloTV, voltagemTV){
    return {
        marcaTV,
        TamanhoTV,
        modeloTV,
        voltagemTV,
        ligar(){
            console.log("poe na tomada...");
        }
    }
}
const televisao1 = criarTelevisao('Philips', 50, 'cinema', 'biVolt');
console.log(televisao1);