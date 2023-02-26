


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


class socio_dynamoclub {

    constructor (nombre,apellido,codigo){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.codigo = codigo;

}
}

let lista_socios = [];


lista_socios.push( new socio_dynamoclub ("Roberto","Garcia", 25637));              
lista_socios.push( new socio_dynamoclub ("Claudia", "Romero",23457));
lista_socios.push( new socio_dynamoclub ("Pablo", "Aranda", 35788,)); 
lista_socios.push( new socio_dynamoclub  ("Lorena", "Silva", 45122,));




function validar_socio (){
    const codigo_usuario = document.getElementById ("codigo_usuario").value;
    let mensaje = document.getElementById ("mensaje");
     
    for (let value in lista_socios ){
    
const socio = lista_socios.findIndex(socio => socio.codigo === parseInt(codigo_usuario));   
    
    if (socio !== -1 ){

    /*let parrafo = document.createElement ("p")
    parrafo.innerText = "Bienvenido al simulador de puntos Dynamo";
    parrafo.style.fontSize = "45px"; 
    mensaje.append (parrafo);*/

    document.body.innerHTML = `<p class = "bienvenido"> Código verificado </p>

                                <a href = "pages/simulador.html"> INGRESAR A LA PLATAFORMA </a>`
                                                                                                    
}

    else {

    document.body.innerHTML = `<h2> Error de Usuario </h2>
                            <p class= "estilo_parrafo"> Código de tarjeta no registrado </p>
                            <a href ="index.html"> Volver </a>`
}
break
}

}






//ALTA DE SOCIOS// <<<<<<<<<<<FUNCIÓN ADMINISTRADOR>>>>>>>>>>>>>

/*
let lista_socios = []

for (let i =0 ; i= i + 1;){

    let nombre = ("Ingrese el nombre del Socio");
    let apellido = ("Ingrese el apellido del Socio");
    let codigo = ("Ingrese el código de tarjeta dynamoclub");

    let socio_dynamoclub = new socio_dynamoclub (nombre, apellido, codigo);

    lista_socios.push (socio_dynamoclub);

} 
<<<<<<<<<<<<<<<<<<<<<<<<<<<<< FIN ALTA ADMINISTRADOR>>>>>>>>>>>>>>>>>
*/
//servicios = prompt("Escoja el servicio que desea consumir: Super , Premium o Biodiesel");


//validación servicios//


//while (servicios != "super" && servicios != "premium" && servicios != "biodiesel"){
//servicios = prompt("servicio no hallado, vuelva a intentarlo : 'Super' , 'Premium o 'Biodiesel'")} 





//litros = prompt ("ingrese la cantidad de litros que desea comprar");
//litros 

//validación números//

/*while (isNaN(litros) || litros <=1) {
litros = alert ("no es un número válido")
litros = prompt ("Debe ingresar un número válido")
}

const costo = precio (litros,servicios)
let puntuacion = calculo_puntaje (servicios, litros);

const socio = prompt ("Indique si es socio serviclub: 'si' o 'no'");
const puntos_extra = identificador(socio);

/*

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
*/


 



    //validacion_socio = alert ("Código no valido");













//------------------------------------------------------------------------



/*despedida = alert ("Gracias por su compra, lo esperamos nuevamente.")


console.log("Ud. adquirió:", litros, "litros");
console.log("de combustible:", servicios);256
console.log("por un valor de: $", costo );
console.log("logrando acumular:", puntuacion, "puntos");  
console.log("beneficio serviclub", puntos_extra, "puntos")
*/

//console.log ("socio: ", validar );
//console.log ("usuario", resultado_busqueda)
//console.log("Total de puntos acumulados en su compra:", (puntuacion + puntos_extra), "puntos");

//- eventos ----------------------------------------------------------------------

 

//VALIDACIÓN DE CÓDIGOS

/*function validar_socio (socio_dynamoclub){

return socio_dynamoclub.codigo == validacion_socio

let validacion_socio = codigo_usuario

let resultado_busqueda = lista_socios.find (validar_socio);

if (resultado_busqueda != undefined ){

}

else  {
    validacion_socio = alert ("Código no valido");

}

*/