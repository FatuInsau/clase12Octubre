// ⚖️ Mayor o menor
// Crear un programa que elija un número al azar entre 1 y 10. El programa debe luego pedir al usuario que intente adivinar el número. Por cada intento, debe avisar si el número a adivinar es mayor o menor que el número ingresado. El programa debe terminar cuando se adivina el número.

// numero al azar 1-10
var max = 10;
var min = 1;
var azar = Math.floor(Math.random() * (max - min + 1) + min);

// pedir al usuario un numero
alert("Adivine un numero entre el 1 y el 10");
// parseInt() --> Transforma de string a number
var numUsuario = parseInt( prompt("Ingrese un valor entre 1 y 10") );

// empezar bucle hasta que el usuario adivine
while (numUsuario != azar) {
    if(numUsuario>azar) {
        numUsuario = prompt("Ingrese un numero más chico");
    } else {
        numUsuario = prompt("Ingrese un numero más grande");
    };
};

alert("Felicidades, adivinaste")
                //  el usuario ingresa un valor mayor o menor al que debe       adivinar