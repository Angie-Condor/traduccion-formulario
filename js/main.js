var title = document.getElementById('form-signin-heading');
var email = document.getElementById('inputEmail');
var password = document.getElementById('inputPassword');
var remember = document.getElementsByTagName('span')[0];
var button = document.getElementsByClassName('btn')[0];

function translate(){

  //traduccion
  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar sesión";
}

function mostrarForm (){
  var mostrarDatos = document.getElementById('mostrar');

  mostrarDatos.innerHTML = "<strong>"+ "</br>" + "El correo electrónico ingresado es:" + "</br>" + email.value + "</br>" + "La clave ingresada es:" + "</br>" + password.value;
}

translate();
