
const divBackLogin = document.querySelector('.back-login');
const divBackRegister = document.querySelector('.back-register');
const divLoginRegister = document.querySelector('.login-register');
const formLogin = document.querySelector('.form-login');
const formRegister = document.querySelector('.form-register');
const btnRegister = document.querySelector('#btn-register');
const btnSesion = document.querySelector('#btn-sesion');

function widthPage (){
    if(window.innerWidth > 850){
        divBackLogin.style.display = "block";
        divBackRegister.style.display = "block";
    }
    else{
        divBackRegister.style.display = "block";
        divBackRegister.style.opacity = "1";
        divBackLogin.style.display = "none";
        formLogin.style.display = "block";
        formRegister.style.display = "none";
        divLoginRegister.style.left = "0px";
    }
}

function register () {
    if(window.innerWidth > 850){
        formRegister.style.display = "block";
        divLoginRegister.style.left = "410px";
        formLogin.style.display = "none";
        divBackRegister.style.opacity = "0";
        divBackLogin.style.opacity = "1";
    }
    else{
        formRegister.style.display = "block";
        divLoginRegister.style.left = "0px";
        formLogin.style.display = "none";
        divBackRegister.style.display = "none";
        divBackLogin.style.display = "block";
        divBackLogin.style.opacity="1";
    }
};

function sesion () {
    if(window.innerWidth > 850){
        formRegister.style.display = "none";
        divLoginRegister.style.left = "10px";
        formLogin.style.display = "block";
        divBackRegister.style.opacity = "1";
        divBackLogin.style.opacity = "0";
    }
    else{
        formRegister.style.display = "none";
        divLoginRegister.style.left = "0px";
        formLogin.style.display = "block";
        divBackRegister.style.display = "block";
        divBackLogin.style.display = "none";
    }
};

widthPage();
btnRegister.addEventListener('click', register);
btnSesion.addEventListener('click', sesion);
window.addEventListener('resize', widthPage);