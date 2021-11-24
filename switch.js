let piedra = "piedras";
let papel = "papel";
let tijera = "tijera";

function juego (p1, p2){
    var p1;
    var p2;
    switch (true) {
        //jugador 1 gana
        case p1 === piedra && p2 === tijera:
        console.log("El jugador 1 es el ganador")
        break
        case p1 === papel && p2 === piedra:
        console.log("El jugador 1 es el ganador")
        break
        case p1 === tijera && p2 === papel:
        console.log("El jugador 1 es el ganador")
        break

        //jugador 2 gana
        case p2 === piedra && p1 === tijera:
        console.log("El jugador 2 es el ganador")
        break
        case p2 === papel && p1 === piedra:
        console.log("El jugador 2 es el ganador")
        break
        case p2 === tijera && p1 === papel:
        console.log("El jugador 2 es el ganador")
        break

        default:
            console.log("Esto ha sido un empate")
        
    }
}

juego(piedra, tijera)