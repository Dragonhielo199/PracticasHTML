let datosFormulario = [];

const formulario = document.getElementById("formulario");

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

    console.log(datosFormulario);

    formulario.reset();
});
