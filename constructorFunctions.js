//camelCase - umDoisTresQuatro
// function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
//     return {
//         marcaCelular,
//         tamanhoTela,
//         capacidadeBateria,
//         ligar(){
//             console.log("Fazendo ligação...");
//         }
//     }
// }

//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log("Fazendo ligação...")
    }
}

const celular = new Celular('asus',5.5, 5000);
console.log(celular);

function Predio(andarPredio, elevadorPredio, piscinaPredio){
    this.andarPredio = andarPredio,
    this.elevadorPredio = elevadorPredio,
    this.piscinaPredio = piscinaPredio,
    this.area = function() {
        console.log("Area boa...");
    }
}

const predio = new Predio(10,'não tem','não tem');
console.log(predio);