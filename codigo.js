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
console.log(mayusculaEnLaPrimerLetra("JUAN"));

function contarLetras(texto) {
    let contar = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            contar++;
        }
    }

    return contar;
}

console.log("Hola mundo");


