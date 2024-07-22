function login() {
    var login = document.getElementById('conta').value;
    var senha = document.getElementById('senha').value;
    if(login == "admin" && senha == "admin") {
        alert('susseso!');
        location.href = "https://www.youtube.com/";
    }
    else{
        alert('conta ou senha incorretos');
    }

}