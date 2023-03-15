
class socio_dynamoclub {

    constructor (nombre,apellido,codigo,puntaje){
    
    this.nombre = nombre;
    this.apellido = apellido;
    this.codigo = codigo;
    this.puntos_acumulados = puntaje

}
}
//alta de socios//

let lista_socios = [];

lista_socios.push( new socio_dynamoclub ("Roberto","Garcia", 25637,1345));              
lista_socios.push( new socio_dynamoclub ("Claudia", "Romero",23457, 1800));
lista_socios.push( new socio_dynamoclub ("Pablo", "Aranda", 35788, 687)); 
lista_socios.push( new socio_dynamoclub  ("Carlos", "Benavidez", 45122, 1900));

localStorage.setItem("lista_socios", JSON.stringify(lista_socios));

console.log (lista_socios)

const codigo_usuario = document.getElementById ("codigo_usuario");

function validar_socio (){

let lista_socios_guardada = JSON.parse(localStorage.getItem("lista_socios"));
let codigo_usuario = document.getElementById ("codigo_usuario").value;
let socio = lista_socios_guardada.find(socio_dynamoclub => socio_dynamoclub.codigo === parseInt(codigo_usuario));   

const {nombre,apellido,codigo,puntos_acumulados} = socio
localStorage.setItem("socio", JSON.stringify(socio))

if (socio ){

console.log (nombre, apellido, codigo, puntos_acumulados);
localStorage.setItem("codigo_usuario", JSON.stringify(codigo_usuario)) 

Swal.fire({
    title: 'Usuario registrado',
    icon: 'success',
    background: '#ffb310',
    color:'black',
    showCancelButton: true,
    confirmButtonColor: ' #239430',
    cancelButtonColor: '#d33',
    confirmButtonText: '<a href ="pages/simulador.html"> Ingresar </a>',
  })

}

else {
}
}

//balace total<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<///

const socio = JSON.parse(localStorage.getItem("socio"));
console.log (socio)

let mensaje = document.getElementById ("info");

let resto_puntaje = (2000 - socio.puntos_acumulados)
console.log (resto_puntaje)

mensaje.innerHTML =
`<br>
<p class="usuario"> Bienvenido Usuario: >>>>>> "${socio.nombre} ${socio.apellido}" </p>
<br>

<p class= "puntaje"> Tienes  " ${socio.puntos_acumulados}" puntos acumulados hasta la fecha </p>
<br>

<p class= "premios"> ¡¡ Con tan solo ${resto_puntaje} puntos más accederías al catálogo de premios !!
<br>`

//funcionalidad card Super/

let simulacion = [];
localStorage.setItem("simulacion", JSON.stringify(simulacion)) || [];

let boton_super = document.getElementById("litros_super");
boton_super.addEventListener("click", function() {
combustible = "DY.Super";    

});

let litros_super = document.getElementById("litros_super");
litros_super.addEventListener ("change", function(e){ 

precio = parseInt(e.target.value) * 21,89;
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
// card premium 

let boton_premium = document.getElementById ("litros_premium");
boton_premium.addEventListener("click", function() {  
combustible = "Premium";

});

let litros_premium = document.getElementById ("litros_premium");
litros_premium.addEventListener ("change", function(e){ 

precio = parseInt(e.target.value) * 24,14;
puntos = parseInt(e.target.value) + 150;

let resultado_premium = {

    combustible: combustible,
    Total_litros:  (e.target.value),
    precio: precio,
    puntos: puntos,
}  

simulacion.push (resultado_premium);
localStorage.setItem("simulacion", JSON.stringify(simulacion));
console.log (simulacion);

mostrar_tabla();
})

// Card Biodiesel

let boton_bio = document.getElementById ("litros_bio");
boton_bio.addEventListener("click", function(){
combustible = "biodiesel";
});

let litros_bio = document.getElementById ("litros_bio");
litros_bio.addEventListener ("change", function(e){ 

precio = parseInt(e.target.value) * 23,72;
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

//-------------------------------------------------------//

function mostrar_tabla (){

let tabla = document.getElementById ("tbody");
tabla.innerHTML = "";
 
let puntaje_total =0;


    for (let resultado of simulacion){

        let fila = document.createElement ("tr");
        fila.innerHTML = 
        `<td> ${resultado.combustible} </td>
         <td>  ${resultado.Total_litros} </td>
         <td > ${resultado.precio} </td>
         <td> ${resultado.puntos} </td>
         <td class="resultado">${puntaje_total += resultado.puntos}</td>
        
        <td> <button class= "btn btn-warning borrar_elemento "> Borrar </button> </td>`
        
        puntaje_total += resultado.puntos

        tabla.append(fila);

    }


let btn_borrar = document.querySelectorAll(".borrar_elemento");


for (let btn of btn_borrar){
    btn.addEventListener ("click", borrar_elemento);
}

function borrar_elemento (e){
    
console.log ("elemento_eliminar", e.target) 
e.target.parentNode.parentNode.remove();
simulacion.pop();
console.log (simulacion);
}

document.getElementById("ingreso").reset();
}

//footer//
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


    const clima = JSON.parse(localStorage.getItem("clima"))
    let titular = document.getElementById ("clima")

    function mostrar_posicion (posicion){
    
    let lat =  posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "4d690579657f5b22b2f1b6bd1ee34676";
    
 fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
 
 .then (response => response.json ())
 //.then (data =>console.log (data))
 .then (data => {
 
  titular.innerHTML = 
 `<p class="clima"> Ciudad : ${data.name} <br> 
  Clima : ${data.weather[0].description} <br>
  Humedad: ${data.main.humidity} % <br>
  visibilidad :100% <br>  
  ***Conduzca con cuidado*** </p>`
 })


}

navigator.geolocation.getCurrentPosition(mostrar_posicion)