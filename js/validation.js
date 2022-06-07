const fLogin = document.querySelector('form.form-login');
const fRegister = document.querySelector('form.form-register');

//Login - Email
fLogin.email.addEventListener('blur', ev =>{
    let arrEmail = ev.target.value.split("@");//Debo tener dos indices
    //let arrDominio = arrEmail[1].split(".");//Debo tener dos o tres indices
    let arrDominio;
    //console.log(arrEmail);

    let message;
    if(arrEmail.length === 1){
        message = 'Debe colocar un signo @';
    
    }else if (arrEmail.length > 2) {
        message = 'Solo puedes colocar un signo @';
    
    }else if(arrEmail[0].length === 0){
        message = 'Debes escribir texto antes del @';

    }else if( ( arrDominio = arrEmail[1].split(".")).length === 1 || arrDominio.length > 3){
        message = 'Coloque un dominio valido';
    }else{
        message = '';
    }

    ev.target.parentElement.querySelector('.err').innerText = message;
    ev.target.setCustomValidity(message);
})

// Login - password
fLogin.pass.addEventListener('input', ev => {
    let message;

    if(ev.target.value.length < 6 || ev.target.value.length > 15){
        message = 'Su contraseña debe tener entre 6 y 15 caracteres';

    }else{
        message = '';
    }
        ev.target.parentElement.querySelector('.err').innerText = message;
        ev.target.setCustomValidity(message);
});

//Validacion de TODOS los campos (required)
fLogin.addEventListener('submit', ev => 
{
    for(let i = 0 ; i < fLogin.length ; i++)
    {
        //console.log(form[i]);
        //Valido si es un input de tipo text o email y que tenga un string vacio
        if(fLogin[i].tagName === 'INPUT' &&
            (fLogin[i].type=='text' || fLogin[i].type=='email' || fLogin[i].type=='password')
            && fLogin[i].value == '')
        {
            ev.preventDefault();
            console.log('hay un input vacio');
        }
    }
});

// Register - nombre
fRegister.fName.addEventListener('input', ev => {
    let message;

    if(ev.target.value.length < 2 || ev.target.value.length > 15){
        message = 'El nombre debe tener entre 2 y 15 caracteres';

    }else{
        message = '';
    }
        ev.target.parentElement.querySelector('.err').innerText = message;
        ev.target.setCustomValidity(message);
});

// Register - nombre
fRegister.lName.addEventListener('input', ev => {
    let message;

    if(ev.target.value.length < 2 || ev.target.value.length > 15){
        message = 'El apellido debe tener entre 2 y 15 caracteres';

    }else{
        message = '';
    }
        ev.target.parentElement.querySelector('.err').innerText = message;
        ev.target.setCustomValidity(message);
});

//Login - Email
fRegister.regEmail.addEventListener('blur', ev =>{
    let arrEmail = ev.target.value.split("@");//Debo tener dos indices
    //let arrDominio = arrEmail[1].split(".");//Debo tener dos o tres indices
    let arrDominio;
    //console.log(arrEmail);

    let message;
    if(arrEmail.length === 1){
        message = 'Debe colocar un signo @';
    
    }else if (arrEmail.length > 2) {
        message = 'Solo puedes colocar un signo @';
    
    }else if(arrEmail[0].length === 0){
        message = 'Debes escribir texto antes del @';

    }else if( ( arrDominio = arrEmail[1].split(".")).length === 1 || arrDominio.length > 3){
        message = 'Coloque un dominio valido';
    }else{
        message = '';
    }

    ev.target.parentElement.querySelector('.err').innerText = message;
    ev.target.setCustomValidity(message);
})

// Login - password
fRegister.regPass.addEventListener('input', ev => {
    let message;

    if(ev.target.value.length < 6 || ev.target.value.length > 15){
        message = 'Su contraseña debe tener entre 6 y 15 caracteres';

    }else{
        message = '';
    }
        ev.target.parentElement.querySelector('.err').innerText = message;
        ev.target.setCustomValidity(message);
});

//Validacion de TODOS los campos (required)
fRegister.addEventListener('submit', ev => 
{
    for(let i = 0 ; i < fRegister.length ; i++)
    {
        //console.log(form[i]);
        //Valido si es un input de tipo text o email y que tenga un string vacio
        if(fRegister[i].tagName === 'INPUT' &&
            (fRegister[i].type=='text' || fRegister[i].type=='email' || fRegister[i].type=='password')
            && fRegister[i].value == '')
        {
            ev.preventDefault();
            console.log('hay un input vacio');
        }
    }
});

