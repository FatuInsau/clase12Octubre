// agrega signos de exclamacion antes y despues
function gritar (texto) {
    return '¡'+texto+'!';
};

// junta un nombre y un apellido en una string
function obtenerNombreCompleto (nombre,apellido) {
    return nombre + " " + apellido;
};

// devuelve un saludo con un nombre
function saludar (nombre) {
    return `Hola ${nombre}, un gusto conocerte`;
};

// saludarGritando(nombre, apellido)
// Usando las funciones anteriores (obtenerNombreCompleto, saludar y gritar), crear una función saludarGritando que tome como argumentos un nombre y un apellido y devuelva un saludo con signos de exclamación.

function saludarGritando (nombre,apellido) {

    var nombreCompleto = obtenerNombreCompleto(nombre,apellido);

    var saludoConNombre = saludar(nombreCompleto);

    var resultado = gritar(saludoConNombre);

    return resultado;
};

// console.log(saludarGritando('Ada', 'Lovelace')) // ¡Hola Ada Lovelace, un gusto conocerte!

// console.log(saludarGritando("Belen","Zalazar"))


function saludarGritando2 (nombre, apellido) {
    return gritar( saludar( obtenerNombreCompleto(nombre,apellido) ) )
};

console.log(saludarGritando2("Fati","Insau"))