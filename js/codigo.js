
//función puntaje// 

function calculo_puntaje(servicios , litros,) {

    litros=parseInt (litros);

    if (servicios =="Super"|| servicios == "super" ){
    let puntos = litros +  30;
    return puntos
    }
    
    else if(servicios == "Premium"|| servicios == "premium" ) {
    let puntos = litros + 40;
    return puntos
    
    }
    
    else if (servicios =="Biodiesel"||servicios == "biodiesel" ) {
    let puntos = litros +  60;
    return puntos 
} 

}

servicios = prompt("Escoja el servicio que desea consumir: Super , Premium o Biodiesel.");


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



let puntuacion = calculo_puntaje (servicios, litros);

function socio_serviclub (Socio) {
    if (Socio =="si"|| Socio == "SI") {
        
        let puntuacion =calculo_puntaje (servicios, litros);
        
        let puntos_extra = puntuacion * 2;
        
        return puntos_extra;

    } else if (Socio == "no"|| Socio == "NO" ) {
        return 0;
    }

    else {
        return 0;
    }
}

const socio = prompt ("Indique si es socio serviclub: 'si' o 'no'");
const puntos_extra = socio_serviclub(socio);

despedida = alert ("Gracias por su compra, lo esperamos nuevamente.")


console.log("Ud. adquirió:", litros, "litros");
console.log("de combustible:", servicios);
console.log("logrando acumular:", puntuacion, "puntos");  
console.log("beneficio serviclub:", puntos_extra, "puntos");
console.log("Total de puntos acumulados en su compra:", (puntuacion + puntos_extra), "puntos");


//HASTA ACÁ, PRIMERA PARTE