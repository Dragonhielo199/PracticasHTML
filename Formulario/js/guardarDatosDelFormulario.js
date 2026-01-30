const formulario = document.getElementById("formulario");

let datosFormulario = JSON.parse(localStorage.getItem("datosFormulario")) || [];

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const datos = {
        nombre: document.getElementById("nombre").value,
        apellidos: document.getElementById("apellidos").value,
        sexo: document.querySelector('input[name="sexo"]:checked')?.value || "",
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value
    };

    datosFormulario.push(datos);

    localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));

    formulario.reset();
	
	window.location.href = "Tabla/Tabla.html";
});
