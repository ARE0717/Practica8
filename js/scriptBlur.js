var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;
var enviarDatos=0;

var nombre=document.getElementById("nombre");
nombre.addEventListener("blur", ()=>{
    if(!regexNombre.test(nombre.value)){
        alert("Nombre no valido")
        document.getElementById("nombre").classList.add("errorInput");    
        document.getElementById("nombre").classList.remove("correctoInput"); 
       
    }
})

var celular=document.getElementById("celular");
celular.addEventListener("blur", ()=>{
    if(!regexCelular.test(celular.value)){
        alert("Celular no valido")
        document.getElementById("celular").classList.add("errorInput");
        document.getElementById("celular").classList.remove("correctoInput");
    }
})

var correo=document.getElementById("correo");
correo.addEventListener("blur", ()=>{
    if(!regexCorreo.test(correo.value)){
        alert("Correo no valido")
        document.getElementById("correo").classList.add("errorInput");
        document.getElementById("correo").classList.remove("correctoInput");
    }
})