
class socio_dynamoclub {

    constructor (nombre,apellido,codigo,puntaje){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.codigo = codigo;
    this.puntos_acumulados= puntaje

}
}
//alta de socios//

let lista_socios = [];

lista_socios.push( new socio_dynamoclub ("Roberto","Garcia", 25637,455));              
lista_socios.push( new socio_dynamoclub ("Claudia", "Romero",23457, 723));
lista_socios.push( new socio_dynamoclub ("Pablo", "Aranda", 35788, 320)); 
lista_socios.push( new socio_dynamoclub  ("Lorena", "Silva", 45122, 123));

localStorage.setItem("lista_socios", JSON.stringify(lista_socios));

console.log (lista_socios)




function validar_socio (){


let lista_socios_guardada = JSON.parse(localStorage.getItem("lista_socios"));

console.log (lista_socios_guardada);

    const codigo_usuario = document.getElementById ("codigo_usuario").value;

    
const socio = lista_socios_guardada.find(socio_dynamoclub => socio_dynamoclub.codigo === parseInt(codigo_usuario));   

let mensaje = document.getElementById ("mensaje");

    if (socio ){

         mensaje.innerHTML = `<p class = "bienvenido"> Código verificado </p>
                              <p class = "user"> Usuario : ${socio.nombre} ${socio.apellido} </p>
                              <p  class = "puntos"> "Tenés ${socio.puntos_acumulados} puntos en tu cuenta"</p>
                              <br>
                              <a href = "pages/simulador.html"> INGRESAR A LA PLATAFORMA </a>`
        

    let nombre = socio.nombre;
    let apellido = socio.apellido;
    let codigo = socio.codigo;
    let puntos_acumulados= socio.puntos_acumulados

    console.log (nombre, apellido, codigo, puntos_acumulados);
    

    }
    else {

    mensaje.innerHTML = `<h2>Error de Usuario</h2>
                        <p class= "estilo_parrafo"> Código de tarjeta no  registrado </p>
                        <br>
                        <a href ="index.html"> Volver </a>`
}

}

    
    

//funcionalidad card Super//

let simulacion = [];

localStorage.setItem("simulacion", JSON.stringify(simulacion)) || [];

let boton_super = document.getElementById ("litros_super");
boton_super.addEventListener("click",function() {
combustible = "Super"    


});

let litros_super = document.getElementById ("litros_super");
litros_super.addEventListener ("change", function(e){ 

precio = parseInt(e.target.value) * 125;
puntos = parseInt(e.target.value) + 100;


let resultado = {
    combustible: combustible,
    Total_litros: (e.target.value),
    precio: precio,
    puntos: puntos,
}  


simulacion.push (resultado);

localStorage.setItem("simulacion", JSON.stringify(simulacion));

console.log (simulacion);
console.log (resultado);

mostrar_tabla();

},
)
//funcionalidad card premium (que es igual a la otra pero con otros Id

let boton_premium = document.getElementById ("litros_premium");
boton_premium.addEventListener("click", function() {  
combustible = "premium";

});

let litros_premium = document.getElementById ("litros_premium");
litros_premium.addEventListener ("change", function(e){ 

precio = parseInt(e.target.value) * 150;
puntos = parseInt(e.target.value) + 150;

let resultado_premium = {

    combustible: combustible,
    Total_litros: (e.target.value),
    precio: precio,
    puntos: puntos,
}  


simulacion.push (resultado_premium);
localStorage.setItem("simulacion", JSON.stringify(simulacion));
console.log (simulacion);

mostrar_tabla();
})

// KISS & DRY *3 - Card 3//

let boton_bio = document.getElementById ("litros_bio");
boton_bio.addEventListener("click",function() {
combustible = "biodiesel";
});

let litros_bio = document.getElementById ("litros_bio");
litros_bio.addEventListener ("change", function(e){ 

precio = parseInt(e.target.value) * 180;
puntos = parseInt(e.target.value) + 200;

let resultado_bio = {
    combustible: combustible,
    Total_litros: (e.target.value),
    precio: precio,
    puntos: puntos,
}  

simulacion.push (resultado_bio);
localStorage.setItem("clave", JSON.stringify(simulacion));
console.log (simulacion);


mostrar_tabla();
});

function mostrar_tabla (){

    let tabla = document.getElementById ("tbody");
    tabla.innerHTML = "";
 
let puntaje_total =0;

    for (let resultado of simulacion){

        let fila = document.createElement ("tr");
        fila.innerHTML = 
        `<td> ${resultado.combustible} </td>
        <td> ${resultado.Total_litros} </td>
        <td> ${resultado.precio} </td>
        <td> ${resultado.puntos} </td> 
        
        <td> <button class= "btn btn-warning borrar_elemento "> Borrar </button> </td>`

        puntaje_total+=resultado.puntos  

        tabla.append(fila);
    } 
     
let filanueva =  document.createElement("tr");
filanueva.innerHTML = `<td colspan="3" class ="resultado">total de puntos:</td><td class="resultado">${puntaje_total}</td>
                       <td> <button class= "btn btn-warning borrar_elemento "> Borrar </button> </td>`      

tabla.append(filanueva);



let btn_borrar = document.querySelectorAll(".borrar_elemento");

console.log (btn_borrar);

for (let btn of btn_borrar){
    btn.addEventListener ("click", borrar_elemento);

}

function borrar_elemento (e){
    console.log ("objeto a eliminar", e.target) 
    e.target.parentNode.parentNode.remove();
    
    simulacion.pop();
    console.log (simulacion);

}
}

function limpiarFormulario() {
document.getElementById("ingreso1").reset();
document.getElementById("ingreso2").reset();
document.getElementById("ingreso3").reset();

}



let elemento1= document.getElementById ("burger");
elemento1.addEventListener("mouseover", function(){
elemento1.src = "../img/premio7.jpg";

})

elemento1.addEventListener("mouseout", function(){
elemento1.src = "../img/premio1.jpg";

})


let elemento2 = document.getElementById ("promo");
elemento2.addEventListener("mouseover", function(){
elemento2.src = "../img/premio8.jpg";

})

elemento2.addEventListener("mouseout", function(){
elemento2.src = "../img/premio3.jpg";

})

let elemento3 = document.getElementById ("cafe");
elemento3.addEventListener("mouseover", function(){
elemento3.src = "../img/premio5.jpg";

})

elemento3.addEventListener("mouseout", function(){
elemento3.src = "../img/premio2.jpg";

})

let elemento4 = document.getElementById ("descuento");
elemento4.addEventListener("mouseover", function(){
elemento4.src = "../img/premio6.jpg";

})

elemento4.addEventListener("mouseout", function(){
elemento4.src = "../img/premio4.jpg";

})

