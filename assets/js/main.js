
let email = document.querySelector('#exampleInputEmail1')



function validaEmail(){
    let txtEmail = document.querySelector('#txt-email')
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        txtEmail.innerHTML = "";
    }else{
        txtEmail.innerHTML = "Email Invalido! Digite um email Válido";
        txtEmail.style.color = 'white'
    }
}

email.addEventListener("focusout", validaEmail);

function entrar() {
    window.location.href ='/inicio.html'
}

function sair() {
    window.location.replace('/index.html')
}
