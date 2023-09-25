const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});
function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        if (tab.id === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

const nombreRx = /^[a-zA-Z\s]+$/;
const emailRx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

function validarRegistro() {
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('mail');
  const passwordInput = document.getElementById('password');

  const nombre = nombreInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!nombreRx.test(nombre)) {
    alert('Ingrese un nombre válido.');
    nombreInput.focus();
    return false;
  }
  if (!emailRx.test(email)) {
    alert('Ingrese una dirección de correo electrónico correcta.');
    emailInput.focus();
    return false;
  }
  if (!passwordRx.test(password)) {
    alert('La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula y un número.');
    passwordInput.focus();
    return false;
  }
  window.location.href = "../index.html";
  return true;
}

function validarInicioSesion() {
  const emailInput = document.getElementById('mails');
  const passwordInput = document.getElementById('passwords');

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!emailRx.test(email)) {
    alert('Por favor, ingresa una dirección de correo electrónico válida.');
    emailInput.focus();
    return false;
  }

  if (!passwordRx.test(password)) {
    alert('La contraseña debe contener al menos 8 caracteres, una mayúscula, una minúscula y un número.');
    passwordInput.focus();
    return false;
  }window.location.href = "../index.html";
  return true;
}


document.getElementById('iniciar').addEventListener('click', validarRegistro);
document.getElementById('registro').addEventListener('click', validarInicioSesion);

function irAComprarx() {
  var url = "https://www.exito.com/consola-xbox-series-x-1tb-microsoft-101154798-mp/p";
  window.location.href = url;
}
function irAComprara() {
  var url = "https://www.exito.com/watch-s7-41mm-gps-blanco-apple-mkmy3bea-3045064/p";
  window.location.href = url;
}
function irAComprarp() {
  var url = "https://www.exito.com/consola-playstation-5-2-controles-ps5-gow-ragnarok-fifa-23-cargador-dobe-102416909-mp/p";
  window.location.href = url;
}
function irAComprarn() {
  var url = "https://www.pepeganga.com/nevecon-no-frost-ge-profile-pql26pgkcss-mabe-pql26pgkcss/p";
  window.location.href = url;
}
function irAComprart() {
  var url = "https://vivelaera.com/producto/combo-tv-qled-4k-qn98q80ca-barra-hw-q930c/";
  window.location.href = url;
}
function irAComprars() {
  var url = "https://www.exito.com/lavadoras-secadora-22-kg-inox-samsung-wd22t6500gpco-3008077/p";
  window.location.href = url;
}


