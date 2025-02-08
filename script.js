
let continuar = true //Variavel para loop

// FUNÇÃO PARA CALCULAR O SALDO DE VITORIAS
function VitoriasEDerrotas(vitoria, derrotas) { // parametros (vitoria, derrotas)
    return vitoria - derrotas;//está retornando o calculo
}

 while (continuar) {
    let entrar = prompt("Digite S para continuar ou N para encerrar")
    if (entrar === "N"){
        continuar = false
    }else {
            const vitoria = parseInt(prompt("Digite seu saldo de vitorias:"))
            const derrotas = parseInt(prompt("Digite o seu numero de derrotas:"))
            let saldoVitorias = VitoriasEDerrotas(vitoria , derrotas) // guardando o resultado da função em uma variavel

            if (saldoVitorias < 10) {
                ranke = "Ferro"
            } else if ((saldoVitorias >11) &&(saldoVitorias<20)){
                ranke = "Bronze" 
            } else if ((saldoVitorias >21) && (saldoVitorias<50)){
                ranke = "Prata"
            } else if ((saldoVitorias > 51) && (saldoVitorias <80)){
                ranke = "Ouro"
            } else if ((saldoVitorias > 81) && (saldoVitorias < 90)){
                ranke = "Diamante"
            }else if ((saldoVitorias > 91) && (saldoVitorias < 100)){
                ranke = "Lendário"
            } else if (saldoVitorias>101){
                ranke = "Imortal"}

            console.log(`O Herói tem o saldo de:${saldoVitorias}, e está no Ranke:${ranke}. `)
            }
}
    