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



//PARTE 3//

console.log(" ");
console.log('-----------')
console.log('~ PARTE 3 ~')
console.log('-----------')

//EJ08//

const usuario = {
 nombre: "Ana",
 edad: 20,
 activo: false
}

function descripcionUsuario(usuario){

return ` ${usuario.nombre} tiene ${usuario.edad} años.`;
}

console.log("EJ08");
console.log(`Deberia devolver Ana tiene 20 años:   ${descripcionUsuario(usuario)}`);

//EJ09//
function activarUsuario(usuario){
usuario.activo = true;
return usuario;

}
console.log(" ");

console.log("EJ09");
console.log(`Deberia devolver true:   ${activarUsuario(usuario).activo}`);



//EJ10//
const productos = [
{nombre:"Mouse", precio:10},
{nombre:"Teclado", precio:25},
{nombre:"Monitor", precio:200}
]
function calcularPrecioTotal(productos){

    let suma = 0;

    productos.forEach(productos => { suma += productos.precio });
    return suma;
}
console.log(" ");
console.log("EJ10");
console.log(`Deberia devolver 235 :   ${calcularPrecioTotal(productos)} `);

//Parte 4//

console.log(" ");
console.log('-----------')
console.log('~ PARTE 4 ~')
console.log('-----------')

//EJ11//
const usuarios = [
{nombre:"Ana", edad:17},
{nombre:"Juan", edad:25},
{nombre:"Pedro", edad:30}
]

function soloNombres (usuarios){
    return usuarios.map(usuario => " " + usuario.nombre );
}

console.log(" ");
console.log("EJ11");
console.log(`Deberia devolver  Ana, Juan, Pedro :   ${soloNombres (usuarios)} `);

//EJ 12//
 function soloAdultos(usuarios){
    return usuarios.filter (usuario =>  usuario.edad >= 18)
 }
 
console.log(" ");
console.log("EJ12");
console.log(`Deberia devolver Juan, Pedro: ${soloAdultos(usuarios).map(usuario => " " + usuario.nombre)}`);


//EJ 13//
function sumaEdades(usuarios) {
    return usuarios.reduce((total, usuario) => { return total + usuario.edad;}, 0);
}
console.log(" ");
console.log("EJ13");
console.log("Deberia devolver 72: " + sumaEdades(usuarios));


//EJ 16//

function buscarProducto(productos, nombre) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombre) {
            return productos[i];
        }
    }
}
console.log(" ");
console.log("EJ16");
const producto = buscarProducto(productos, "Teclado");

console.log(`Deberia devolver nombre Teclado, precio 25:
Nombre: ${producto.nombre}
Precio: ${producto.precio}`);

//EJ 17//
function precioMasDe50(productos){
    return productos.filter(producto => producto.precio > 50);
}
const mas50 = precioMasDe50(productos);

console.log(" ");
console.log("EJ17");
console.log(`Debería devolver nombre Monitor, precio 200:`);
mas50.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio: ${producto.precio}`);});
