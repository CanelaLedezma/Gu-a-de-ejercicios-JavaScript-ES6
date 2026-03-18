//PARTE 1//

//EJ01//
console.log('-----------')
console.log('~ PARTE 1 ~')
console.log('-----------')
function mayusculaEnLaPrimerLetra (nombre) {
    let resultado = "";

    for (let i = 0; i < nombre.length; i++) {
     
        if (i === 0) {
        resultado += nombre[i].toUpperCase();
        } 
        else {
        resultado += nombre[i].toLowerCase();  
        }

    }

    return resultado;
}
console.log("EJ01")

console.log("- Deberia devover Juan: "+mayusculaEnLaPrimerLetra("JUAN"));

//EJ02//

function contarLetras(texto) 
{
    let contar = 0;

    for (let i = 0; i < texto.length; i++) 
        {

        if (texto[i] !== " "){
            contar++;
        }
    }

    return contar;
}

console.log(" ");
console.log("EJ02")
console.log("- Deberia devover 9:  " + contarLetras("hola mundo"));
console.log(" ");

//EJ03//

function maximo(a, b, c) 
{
    let numeros = [a, b, c];

    numeros.sort((x, y) => x - y);

    return numeros[2];
}

console.log("EJ03")
console.log("- Deberia devover 20: "+maximo(1, 20, 6));
console.log(" ");

//EJ04//

function validarPassword(password) {
    let tieneNumero = false;

    for (let i = 0; i < password.length; i++) {

        if (password[i] >= "0" && password[i] <= "9") 
        {
            tieneNumero = true;
        }
    }

    return password.length >= 8 && tieneNumero;
}

console.log("EJ04");
console.log("- Deberia devolver false: "+ validarPassword("hola"));
console.log("- Deberia devolver false: "+ validarPassword("holaaaaa"));
console.log("- Deberia devolver true:  "+ validarPassword("holaaaaa9"));

//PARTE 2//

//EJ 5//
console.log(" ");
console.log('-----------')
console.log('~ PARTE 2 ~')
console.log('-----------')

function sumarArray (numeros) {
    
    let suma = 0;

    numeros.forEach(n => { suma += n });

    return suma;
}
console.log("EJ05");
console.log("- Deberia devolver 18:  "+ sumarArray([3, 5, 10]));


//EJ 6//

function mayorNumero(numeros)
{
    let mayorN = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i]>mayorN)
        {
            mayorN = numeros[i];
        }
}
        return mayorN;}

console.log(" ");
console.log("EJ06");
console.log("- Deberia devolver 8:  "+mayorNumero([1, 4, 8, 3]));

//EJ 7//
function obtenerPares(numeros)
{
    return numeros.filter(n => n % 2 === 0);
}
console.log(" ");

console.log("EJ07");

console.log("- Deberia devolver 2, 4, 6:  "+obtenerPares([1,2,3,4,5,6]));


//EJ 8//
const usuario = {
 nombre: "Ana",
 edad: 20,
 activo: false
}

function descripcionUsuario(usuario){

}
 console.log(`${usuario.nombre} tiene ${usuario.edad} años.`);


