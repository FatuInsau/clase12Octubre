// esPar(numero)
// Crear una función esPar que tome como argumento un número y devuelva true si dicho números es par o false si no lo es

// TIP: un número es par si divido por 2 el resto (o módulo) de esa operación es 0

function esPar (numero) {
    // si el numero es par
    if (numero%2 === 0) {
        // devolver true
        return true;
         // si no es par
    } else {
        // devolver false
        return false;
    }
};

console.log(esPar(2)) // true
console.log(esPar(3)) // false