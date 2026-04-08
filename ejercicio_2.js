/*Construye una clase usando function para implementar una cuenta de efectivo. Poseerá dos
propiedades: nombre del titular y saldo. Además debe tener dos métodos: ingresar() y
retirar(). El primero incrementa el saldo en la cantidad indicada en el argumento y el segundo
lo reduce. No se puede sacar más de lo que exista en el saldo.
A los métodos los invocaremos con las llamadas ingresar(1000) o retirar(100) Tras ingresar el saldo será 1000 y tras retirar el saldo será 900.*/


function cuenta (titular, saldo){
    this.saldo=saldo;
    this.titular = titular;

    this.ingresar = function (cantidad){
        if(cantidad > 0){
            this.saldo+=cantidad;
            console.log('se han ingresado ' + cantidad + ' \nel saldo actual es ' + this.saldo);
        }
    }

    this.retirar = function (cantidad){
        if (cantidad <= this.saldo){
            this.saldo -= cantidad;
            console.log('se ha retirado ' + cantidad + '\nEl saldo actual es ' + this.saldo);
        } else {
            console.log("Saldo insuficiente");
        }
    }

} //Esto no


let micuenta = new cuenta ('Sam', 0);
micuenta.ingresar(-12);
micuenta.ingresar(2000);
micuenta.retirar(100);
micuenta.retirar(20000);



//para convertir los atributos en privados

class  runner {
    //declaracion de atributos
    #distancia;
    #tiempo;

    constructor(distancia, tiempo){
        this.distancia = distancia;
        this.tiempo = tiempo;
    }

    set distancia (valor){
        if(valor > 0){
            this.#distancia = valor;
        } else{
            console.log('ERROR: La distancia tiene que ser mayor que 0');
        }
    }

    set tiempo (valor){
        if(valor > 0){
            this.#tiempo = valor;
        }else {
            console.log('ERROR: El tiempo tiene que ser mayor que 0');
        }
    }

    //getter

    get velocidad(){
        return this.#distancia/this.#tiempo;
    }


}

const corredor = new runner(1000, 200);

console.log('velocidad ' + corredor.velocidad);



