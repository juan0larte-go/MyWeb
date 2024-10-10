const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event){
    const nombre=document.getElementById('nombre').value;
    const email=document.getElementById('email').value;
    const mensaje=document.getElementById('mensaje').value;

    alert (`Nombre: ${nombre}\n Correo: ${email}\n Mensaje: ${mensaje}`);
});