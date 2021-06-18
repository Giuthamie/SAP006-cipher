import cipher from './cipher.js';


let offset;
let cifra;
let decifra;
let resp;

let botaocifrar = document.getElementById("button1")
botaocifrar.addEventListener("click", cifrar);

let botaodecifrar = document.getElementById("button2")
botaodecifrar.addEventListener("click", decifrar);

function cifrar() {
    offset = Number(document.getElementById("deslocamento").value)
    cifra =  document.getElementById("cifrar").value
    resp =  document.getElementById("resposta")
    return resp.value = cipher.encode(offset,cifra);
}

function decifrar () {
    offset = Number(document.getElementById("deslocamento").value)
    decifra = document.getElementById("decifrar").value
    resp = document.getElementById("resposta")
    return resp.value = cipher.decode(offset,decifra);
}


//console.log(cipher);