function mayusculaEnLaPrimerLetra (nombre) {
    let resultado = "";

    for (let i = 0; i < nombre.length; i++) {
        if (i === 0) {
            resultado += nombre[i].toUpperCase();
        } else {
            resultado += nombre[i].toLowerCase();
        }
    }

    return resultado;
}
