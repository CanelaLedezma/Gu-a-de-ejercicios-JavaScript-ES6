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
console.log("deberia devover Juan: "+mayusculaEnLaPrimerLetra("JUAN"));

function contarLetras(texto) {
    let contar = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            contar++;
        }
    }

    return contar;
}

console.log("deberia devover 9:  " + contarLetras("hola mundo"));


function maximo(a, b, c) {
    let numeros = [a, b, c];

    numeros.sort((x, y) => x - y);

    return numeros[2];
}

console.log("deberia devover 20: "+maximo(1, 20, 6));


function validarPassword(password) {
    let tieneNumero = false;

    for (let i = 0; i < password.length; i++) {
        if (password[i] >= "0" && password[i] <= "9") {
            tieneNumero = true;
        }
    }

    return password.length >= 8 && tieneNumero;
}
console.log("deberia devolver false: "+ validarPassword("hola"));
console.log("deberia devolver false: "+ validarPassword("holaaaaa"));
console.log("deberia devolver true:  "+ validarPassword("holaaaaa9"));