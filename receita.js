/* Defina o tempo esperado de forno em min */

const tempoPreparo = 40;

function tempoNoForno (){
    console.log(`Permanece no forno por ${tempoPreparo} minutos`)
}

tempoNoForno()

/* Calcule o tempo restante de forno em minutos */
function tempoPercorrido (tempoPassado){
    let tempoRestante = tempoPreparo - tempoPassado;
    console.log(`Restao ainda ${tempoRestante} minutos no forno.`)
    return tempoRestante;
}

// tempoPercorrido(20)

/* Calcule o tempo de preparo em minutos */
function tempoDepreparoEmMinutos (numeroDeCamas) {
    let tempoGastoEmMinutos = 2
    let camadas = tempoGastoEmMinutos * numeroDeCamas
    console.log(`O tempo gasto para realizar as camadas foi ${camadas}`)
    return camadas
}
// tempoDepreparoEmMinutos(3)

/* Calcule o tempo total de trabalho em minutos */
function tempoTotalGasto (camada, tempoPassados) {
    let tempoCamada = tempoDepreparoEmMinutos(camada);
    return tempoPassados + tempoCamada;
}
console.log(`Tempo total gasto no preparo foi de ${tempoTotalGasto(3, 20)}  minutos.`)
