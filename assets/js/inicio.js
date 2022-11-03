function downloadpage(numero)
{
    var num = numero
    if(num == 1){window.open("https://github.com/cequeda/Encriptador-Alura_grupo3.git","_blank");}
    if(num == 2){window.open("https://cequeda.github.io/Encriptador-Alura_grupo3/","_blank");}
    if(num == 3){window.open("https://github.com/cequeda/JuegoDelAhorcado-AluraGrupo3.git","_blank");}
    if(num == 4){window.open("https://cequeda.github.io/JuegoDelAhorcado-AluraGrupo3/","_blank");}

}

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_d9gs0lf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      alert('Mensaje enviado correctamente!');
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
limpiar();
});

function limpiar(){
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("asunto").value = "";
    document.getElementById("message").value = "";
}
