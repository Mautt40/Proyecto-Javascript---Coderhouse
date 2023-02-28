
class socio_dynamoclub {

    constructor (nombre,apellido,codigo){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.codigo = codigo;

}
}
//alta de socios//

let lista_socios = [];

lista_socios.push( new socio_dynamoclub ("Roberto","Garcia", 25637));              
lista_socios.push( new socio_dynamoclub ("Claudia", "Romero",23457));
lista_socios.push( new socio_dynamoclub ("Pablo", "Aranda", 35788,)); 
lista_socios.push( new socio_dynamoclub  ("Lorena", "Silva", 45122,));


function validar_socio (){

    const codigo_usuario = document.getElementById ("codigo_usuario").value;
    let mensaje = document.getElementById ("mensaje");
     
    for (let value in lista_socios ){
    
const socio = lista_socios.findIndex(socio_dynamoclub => socio_dynamoclub.codigo === parseInt(codigo_usuario));   
    
    if (socio !== -1 ){

        document.body.innerHTML = `<p class = "bienvenido"> Código verificado </p>
                                
                                   <a href = "pages/simulador.html"> INGRESAR A LA PLATAFORMA </a>`
        }

    else {

    document.body.innerHTML = `<h2> Error de Usuario </h2>
                               <p class= "estilo_parrafo"> Código de tarjeta no  registrado </p>
                               <a href ="index.html"> Volver </a>`
}
break
}
}

// mensaje de bienvenida//

let contenedor = document.getElementById ("cabecera");

let bienvenida = document.createElement ("p")

bienvenida.innerText = "Bienvenido al simulador de puntos Dynamo"  
bienvenida.style.fontSize = "45px"; 

cabecera.append(bienvenida);


//funcionalidad card Super//

let boton_super = document.getElementById ("litros_super");
boton_super.addEventListener("click",function() {
servicios = "super";
});

let litros_super = document.getElementById ("litros_super");
litros_super.addEventListener ("change", function(e){ 

console.log(e.target.value);

if (servicios === "super"){ 
precio = parseInt(e.target.value) * 125;
puntos = parseInt(e.target.value) + 50;

console.log("precio " + precio)
console.log("puntos " + puntos)

}  

});
let btn_calcular_super = document.getElementById ("calc_super");
btn_calcular_super.addEventListener("click", function(e){

console.log ("cálculo super"); 

});

//funcionalidad card premium (que es igual a la otra pero con otros Id, rompiendo el paradigama KISS y el DRY, PERO NO ME SALIÓ DE OTRA MANERA y estoy aprendiendo :(

let boton_premium = document.getElementById ("litros_premium");
boton_premium.addEventListener("click", function() {  
servicios = "premium";

});

let litros_premium = document.getElementById ("litros_premium");
litros_premium.addEventListener ("change", function(e){ 

console.log(e.target.value);

if (servicios === "premium"){ 
precio = parseInt(e.target.value) * 150;
puntos = parseInt(e.target.value) + 70;

console.log("precio " + precio)
console.log("puntos " + puntos)
}
});  

let btn_calcular_premium = document.getElementById ("cal_pre");
btn_calcular_premium.addEventListener("click", function(e){

console.log("cálculo premium");

}); 

// let = KISS DRY *3 - Card 3//

let boton_bio = document.getElementById ("litros_bio");
boton_bio.addEventListener("click",function() {
servicios = "Biodiesel";
});

let litros_bio = document.getElementById ("litros_bio");
litros_bio.addEventListener ("change", function(e){ 

console.log(e.target.value);

if (servicios === "biodiesel"){ 
precio = parseInt(e.target.value) * 180;
puntos = parseInt(e.target.value) + 90;

console.log ("precio " + precio);
console.log ("puntos " + puntos);
} 
});

let btn_calcular_bio = document.getElementById ("calc_bio");
btn_calcular_bio.addEventListener("click", function(e){

console.log("cálculo biodiesel");

});