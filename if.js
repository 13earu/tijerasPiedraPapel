let piedra = "piedras";
let papel = "papel";
let tijera = "tijera";

function juego (p1, p2) {
    if (p1 != p2){
        if (p1 === piedra && p2 === tijera){
            return "Player 1 gana"
        } else  if ( p1 === tijera && p2 === papel) {
            return "Player 1 gana"
        } else  if ( p1 === papel && p2 === piedra) {
            return "Player 1 gana"
        } else {
            return "Player 2 gaana"
        }

    } else {
        return "Empate"
    };  
};

juego(piedra, papel);