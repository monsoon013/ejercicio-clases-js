class Bus {
    #capacidad;
    #pasajeros;
    #conductor;

    constructor(capacidad, pasajeros, conductor){
        this.capacidad = capacidad;
        this.pasajeros = pasajeros;
        this.conductor = conductor;
    }



    set subir (value){
        if(value < 0){
            console.log("ERROR: No es válido")
        }else {
            this.#pasajeros += value;
            if(this.#pasajeros > capacidad){
                
            }
        }
    }
}