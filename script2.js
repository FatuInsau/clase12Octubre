
function saludar (nombre) {
    if (nombre==="Rosa") {
        return "Hola Rosa";
    } else if (nombre === "Belen") {
        return "Hola Belen"
    } else if (nombre === "Fati") {
        return "Hola Fati"
    } else if (nombre === "Luci") {
        return "Hola Luci"
    } else {
        return "No se quien sos"
    }
}

var nombre="Seba"

// segun el nombre
switch (nombre) {
    // es el caso igual a Rosa
    case "Rosa":
        console.log("Hola Rosa");
        break;
    case "Belen":
        console.log("Hola Belen")
        break;
    case "Fati":
        console.log("Hola Fati")
        break;
    // si no es ninguno
    default:
        console.log("No te conozco")
}

// console.log(saludar("Rosa"))

// var clima = "LLuvia"

// o --> ||
// y --> && 


// if (clima.toLocaleLowerCase() === "lluvia") {
//     console.log("LLeva un paraguas")
// } else if (clima === "Nevando") {
//     console.log("LLevar botas de nieve")
// } else {
//     console.log("El clima esta agradable")
// }
