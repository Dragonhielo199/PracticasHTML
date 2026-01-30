const datosFormulario = JSON.parse(localStorage.getItem("datosFormulario")) || [];

const tbody = document.querySelector("#tablaDatos tbody");

datosFormulario.forEach(dato => {
const fila = document.createElement("tr");

fila.innerHTML = `
    <td>${dato.nombre}</td>
    <td>${dato.apellidos}</td>
    <td>${dato.sexo}</td>
	<td>${dato.fechaNacimiento}</td>
    <td>${dato.email}</td>
    <td>${dato.telefono}</td>
    `;

    tbody.appendChild(fila);
});