// //?Invertir cadenas de texto js 

// var text = "oef";
// var result = "";

// for (let i = text.length - 1; i >= 0; i--) {
//     result += text[i]
// }
// console.log(result) //*Version haciendolo complicado aprendiendo sintaxis.

// //*Version ultra facil gracias a herramientas de js

// const cadena = "Hola!";
// const arreglo = cadena.split(""); //lo metemos a un arreglo para poder hacerle la función reverse
// const cadenaInvertida = arreglo.reverse().join(""); //se hace la funcion reverse
// console.log(cadenaInvertida);

// //? Contar las veces que se repite un caracter.

// //*Funcion un poco ''mas compleja''
// const repeat = "DasjdklsjdlkajDJSKA";
// const caracter = "J"

// function contador(texto, caracter) {
//     let count = 0;
//     for (let i = 0; i < texto.length; i++) {
//         if (texto[i] === caracter) {
//             count++;
//         }
//     }
//     return count
// } //Ahora que se hizo la funcion se puede proceder a contar. 

// const count = contador(repeat, caracter);
// console.log(count);

// //* Versión mas facil con arrays
// const repeat2 = "Mañana "
// const caracter2 = "a"
// const count2 = repeat2.split(caracter2).length - 1 //Le pongo menos uno debido a que tambien cuenta el caracter agregado al hacerlo como array
// console.log(count2)



// ? Ejercicio 3. Distancia de Hamming cuantos caracteres son distintos 

// const texto1 = "Gorditps";
// const texto2 = "Gorditos";
// // const distancia = 0; anteriormente puse la distancia aqui pero segun me dijeron para corregir errores, ponia la variable distancia abajo como let

// if (texto1.length != texto2.length) {
//     console.log("Longitudes de texto distintas");
// } else {
//     let distancia = 0 //aqui se agrega
//     for (let i = 0; i < texto1.length; i++) {
//         if (texto1[i] != texto2[i]) {
//             distancia++; //sumaa
//         }
//     }
//     console.log(distancia)
// }


// ?Ejercicio 4. Contador de palabras la separacion x espacios es lo que ayudara a reconocer palabras.

// var oracion = "     Hola    me    llamo    José    Morales     "
// let words = oracion.split(' ').filter(word => word.trim() !== '')
// console.log(words.length)



// ?Contar numeros en cadenas de caracteres (strings) js

// var text = "an1224askjdtojo932j"
// var contador = 0
// contador = text.split('').filter(caracter => /\d/.test(caracter));
// console.log("El texto tiene un total de", contador.length, "Numeros")


//? Ejercicio 6. Mostrar serie de fibonacci.
//Crear funcion.
function fibonacci(numero) {
    let serieF = [0, 1];

    for (let i = 2; i <= numero; i++) {
        serieF.push(serieF[i - 1] + serieF[i - 2])
    }

    return [serieF, serieF[numero]]
}
console.log("Serie Fibonacci: ", fibonacci(10)[0])
console.log("Resultado Fibonacci: ", fibonacci(10)[1])
