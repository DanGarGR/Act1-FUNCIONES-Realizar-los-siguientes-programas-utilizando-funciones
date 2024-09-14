function imprimirDatos() {
    var nombre = document.getElementById('nombre').value;
    var edad = document.getElementById('edad').value;
    var correo = document.getElementById('correo').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;

    var seccionDatos = `
        <h3>Datos Personales</h3>
        <p>Nombre: ${nombre}</p>
        <p>Edad: ${edad}</p>
        <p>Correo: ${correo}</p>
        <p>Dirección: ${direccion}</p>
        <p>Teléfono: ${telefono}</p>
    `;
    
    document.getElementById('seccionDatos').innerHTML = seccionDatos;
}
