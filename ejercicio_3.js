class Ficha {
    #nombre;
    #sesiones;
    #numSesiones;

    constructor (nombre){
        this.nombre = nombre;
        this.sesiones = [];
        this.numSesiones = 0;
    }

    anotar (km){
        this.sesiones[this.numSesiones]=km;
        this.numSesiones++;
    }

    media(){
        let suma = 0;
        for(let i = 0; i<this.numSesiones; i++){
            suma+=this.sesiones[i];
        }
        return suma / this.numSesiones;
    }
}

let ficha1 = new Ficha('Ramon');

ficha1.anotar(8);
ficha1.anotar(14);
ficha1.anotar(6);

console.log("Sesiones anotadas " + ficha1.numSesiones 
                    + "\nMedia Km: " + ficha1.media()
);

