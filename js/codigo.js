
class socio_serviclub {

    constructor (nombre,apellido,codigo){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.codigo = codigo;

}
}
//ALTA DE SOCIOS// <<<<<<<<<<<FUNCIÓN ADMINISTRADOR>>>>>>>>>>>>>

/*
let lista_socios = []

for (let i =0 ; i= i + 1;){

    let nombre = ("Ingrese el nombre del Socio");
    let apellido = ("Ingrese el apellido del Socio");
    let codigo = ("Ingrese el código de tarjeta serviclub");

    let socio_serviclub = new socio_serviclub (nombre, apellido, codigo);

    lista_socios.push (socio_serviclub);

} 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FIN ALTA ADMINISTRADOR>>>>>>>>>>>>>>>>>
*/

let lista_socios = [];


lista_socios.push( new socio_serviclub ("Roberto","Garcia", 2563));              
lista_socios.push( new socio_serviclub ("Claudia", "Romero", 6785));
lista_socios.push( new socio_serviclub ("Pablo", "Aranda", 3578,)); 
lista_socios.push( new socio_serviclub  ("Lorena", "Silva", 4512,));


//función puntaje// 

function calculo_puntaje(servicios , litros,) {

    litros=parseInt (litros);

    if (servicios =="Super"|| servicios == "super" ){
    let puntos = litros +  50;
    return puntos
    }
    
    else if(servicios == "Premium"|| servicios == "premium" ) {
    let puntos = litros + 60;
    return puntos
    
    }
    
    else if (servicios =="Biodiesel"||servicios == "biodiesel" ) {
    let puntos = litros +  65;
    return puntos 
} 
 
}

//funcion precio//

function precio (litros,servicios){

 litros=parseInt (litros);

    if (servicios =="Super"|| servicios == "super" ){
        let costo = litros * 125;
        return costo
    }
    
    else if(servicios == "Premium"|| servicios == "premium" ) {
        let costo = litros * 150;
        return costo
    
    }
    
    else if (servicios =="Biodiesel"||servicios == "biodiesel" ) {
        let costo  = litros * 165;
        return costo

    }
        
        let descuento = parseInt (costo) * 0.10;
        let descuento_serviclub = parseInt (costo) - parseInt (descuento);
     
}


servicios = prompt("Escoja el servicio que desea consumir: Super , Premium o Biodiesel");


//validación servicios//


while (servicios != "super" && servicios != "premium" && servicios != "biodiesel"){
servicios = prompt("servicio no hallado, vuelva a intentarlo : 'Super' , 'Premium o 'Biodiesel'")} 





litros = prompt ("ingrese la cantidad de litros que desea comprar");
litros 

//validación números//

while (isNaN(litros) || litros <=1) {
litros = alert ("no es un número válido")
litros = prompt ("Debe ingresar un número válido")
}

const costo = precio (litros,servicios)
let puntuacion = calculo_puntaje (servicios, litros);

const socio = prompt ("Indique si es socio serviclub: 'si' o 'no'");
const puntos_extra = identificador(socio);



//IDENTIFICACIÓN DE SOCIOS//    



function identificador(socio,) {
    
if (socio =="si"|| socio == "SI") {

        
    let puntuacion =calculo_puntaje (servicios, litros);
        
    let puntos_extra = (puntuacion * 2) - puntuacion ;
        
        return puntos_extra;

    } else if (socio == "no"|| socio == "NO" ) {
        return 0;
    }

    else{
        
        return 0;
}
    
        
    
}

// VALIDACIÓN DE CÓDIGOS///

function validar_socio (socio_serviclub){

    return socio_serviclub.codigo == validacion_socio
}

let validacion_socio = prompt ("Ingrese el código de tu tarjeta serviclub");


let resultado_busqueda = lista_socios.find (validar_socio);

if (resultado_busqueda != undefined ){

}

else  {
    validacion_socio = alert ("Código no valido");
    
}






//------------------------------------------------------------------------



despedida = alert ("Gracias por su compra, lo esperamos nuevamente.")


console.log("Ud. adquirió:", litros, "litros");
console.log("de combustible:", servicios);256
console.log("por un valor de: $", costo );
console.log("logrando acumular:", puntuacion, "puntos");  
console.log("beneficio serviclub", puntos_extra, "puntos")
console.log ("socio: ", validacion_socio );
console.log ("usuario", resultado_busqueda)
console.log("Total de puntos acumulados en su compra:", (puntuacion + puntos_extra), "puntos");





