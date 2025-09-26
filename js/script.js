let buttons = document.querySelectorAll('.accordion-button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
   let isActive = btn.classList.contains('active');

    // Cierra todos
    buttons.forEach(b => {
      b.classList.remove('active');
      b.querySelector('.arrow').innerHTML = "&#9660;";
      b.nextElementSibling.classList.remove('show');
    });

    // Si no estaba activo, actívalo
    if (!isActive) {
      btn.classList.add('active');
      btn.querySelector('.arrow').innerHTML = "&#9650;";
      btn.nextElementSibling.classList.add('show');
    }
  });
});


//     let botonfuncionNormal = document.querySelector("#funcionNormal");
// let botonfuncionConRetorno = document.querySelector("#funcionConRetorno");
// let botonfuncionForEach = document.querySelector("#funcionForEach");
// let botonMostrarIndices = document.querySelector("#funcionMostrarIndices");
// //Ejecuciones por boton

// botonfuncionNormal.addEventListener("click", funcionNormal);
// botonfuncionConRetorno.addEventListener("click", funcionConRetorno);
// botonfuncionForEach.addEventListener("click", funcionForEach);
// botonMostrarIndices.addEventListener("click", mostrarIndices);

    // function funcionForEach() {
    //     //Recorrer un Array
    //     let salidas = document.querySelectorAll(".salida");
    //     salidas.forEach(item => {
    //         item.style.visibility = "hidden"  //elimina el elemento
    //         // item.innerHTML = ""  -> otra opcion pero esta no elimina el elemento, solo lo esconde
    //     })
    // }

