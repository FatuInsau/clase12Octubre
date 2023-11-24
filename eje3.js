// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

    //                   number    booleano ---> true o false
function puedeVerPelicula(edad, tieneAutorizacion) {

    // si tiene más de 15
    if (edad>=15) {
        // puede entrar
        return true;
      // sino, si tiene autorizacion  
    } else if (tieneAutorizacion) {
        // puede entrar
        return true;
        // sino
    } else {
        // no puede entrar
        return false;
    }
    
};


console.log( puedeVerPelicula(12, false) )// false
console.log( puedeVerPelicula(12, true))  // true
console.log( puedeVerPelicula(16, false) )// true
console.log( puedeVerPelicula(18, true)  )// true
