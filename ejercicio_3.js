class Ficha {
    #nombre;
    #sesiones;
    #numSesiones;

    set nombre (value){
        if(typeof  value === "string" || value.length === 0){
            console.log('Introduce un nombre válido');
        }else {
            this.#nombre = value;
        }
    }

    set sesiones (value)
}