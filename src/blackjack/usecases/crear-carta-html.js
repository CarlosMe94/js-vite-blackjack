
export const crearCartaHTML = (carta, turno) => {
    if (!carta) {
        throw new Error('Lacarta es un argumento obligatorio')
    }
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/cartas/${carta}.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta
    // divCartasJugadores[turno].append(imgCarta);
}