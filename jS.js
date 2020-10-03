var input = document.querySelector("#pass");
var usuario = 0;

var button = document.querySelector("#botao"); 
button.style.cursor = "pointer"; 
button.addEventListener("click", clickHandler, false); 

window.addEventListener("keydown", keydownHandler, false); 

function keydownHandler(event) { 
    if(event.keyCode === 13) { 
        validateInput(); 
    } 
}

function clickHandler() { 
    validateInput(); 
}

function validateInput() { 
    usuario = parseInt(input.value);

    if(usuario === 14091999) { 
        password();
    } 
    else { 
        repita(); 
    } 
} 

function password() {
	var apareca = document.querySelector("#aux");
	apareca.style.display = "block";

	var desapareca = document.querySelector("#passbox");
	desapareca.style.display = "none";
}

function repita() {
	let textoInfo = document.querySelector("#infotext");
	textoInfo.innerHTML = "A tua palavra passe está errada";
}