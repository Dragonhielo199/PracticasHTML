let usuarios = ["PepePro33", "Rob3rto088", "PatataFrita567"];
let contrasenas = ["Pepillo1212", "RobertAl225", "MeGustanLasPatatasFritas"];
			
document.getElementById("login").addEventListener("submit", function(e) {
e.preventDefault();
					
	let user = document.getElementById("usuario").value;
	let pass = document.getElementById("clave").value;
	
	const mensajeUsuario = document.getElementById("mensajeErrorUsuario");
    const mensajeContrasena = document.getElementById("mensajeErrorContrasena");
					
	let indice = usuarios.indexOf(user);
	
	if (indice === -1) {
        mensajeUsuario.style.display = "block";
        setTimeout(() => {
            mensajeUsuario.style.display = "none";
        }, 3000);
    }
	
	if (contrasenas[indice] !== pass) {
        mensajeContrasena.style.display = "block";
        setTimeout(() => {
            mensajeContrasena.style.display = "none";
        }, 3000);
    }

	if (indice !== -1 && contrasenas[indice] === pass) {
		alert("Inicio de sesión correcto");
	} 
});