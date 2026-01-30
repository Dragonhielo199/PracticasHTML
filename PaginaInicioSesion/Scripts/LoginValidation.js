let usuarios = ["PepePro33", "Rob3rto088", "PatataFrita567"];
let contrasenas = ["Pepillo1212", "RobertAl225", "MeGustanLasPatatasFritas"];
			
document.getElementById("login").addEventListener("submit", function(e) {
e.preventDefault();
					
	let user = document.getElementById("usuario").value;
	let pass = document.getElementById("clave").value;
					
	let indice = usuarios.indexOf(user);

	if (indice !== -1 && contrasenas[indice] === pass) {
		alert("Inicio de sesión correcto");
	} else {
		alert("Usuario o contraseña incorrectos");
	}
});