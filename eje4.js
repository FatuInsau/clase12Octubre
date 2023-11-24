// esVocal(letra)
// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.

function esVocal(letra) {
    letra = letra.toLocaleLowerCase()
    switch (letra) {
        case 'a':
            return true;
        case 'e':
            return true;
        case 'i':
            return true;
        case 'o':
            return true;
        case 'u':
            return true;
        default: 
            return false;
    }
}

console.log(esVocal('A')) // true
console.log(esVocal('n') )// false