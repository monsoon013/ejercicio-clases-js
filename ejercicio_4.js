class Conductor {
    #nombre;
    #licencia;
}


class Bus {
    #capacidad;
    #pasajeros;
    #conductor;

    constructor(capacidad, conductor){
        this.capacidad = capcidad;
        this.pasajeros = 0;
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

let cond = new Conductor('Alberto', 13);

let linea1 = new Bus (40, cond);

