function VitoriasEDerrotas(vitoria, derrotas) {
    return vitoria - derrotas;
}

let vitoria = parseInt(prompt("Digite seu saldo de vitorias:"))
let derrotas = parseInt(prompt("Digite o seu numero de derrotas:"))
let saldoVitorias = VitoriasEDerrotas(vitoria , derrotas)


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
        ranke = "Imortal"
    }

    console.log(`O Herói tem o saldo de:${saldoVitorias}, e está no Ranke:${ranke}. `)

    