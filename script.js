// Prueba JavaScript 

// Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase 

function contarLetras (array, letra) {
    let suma = 0;                                    
    for (let i = 0; i < array.length; i++) {  // recorrer la longitud del array 
        if (array[i] ===  letra) {                // localiza la letra que se vaya a buscar 
            suma++;                              // guarda el valor adquirido en cada vuelta 
        }
    }
    return suma; // llamamiento a la función 
}

// Diseña un algoritmo que imprima los números impares entre un número dado por el usuario 
// y los siguientes 50 números

function imparesFifty (num) { 
    for (let i = num; i < num +50; i++) {  /// el num que haya dado el usuario + 49 siguientes
     if (i %2 !== 0) {    // comprobar que NO sea un num par 
        console.log(i);  // para que imprima toda la lista de num
    }
 }
}
