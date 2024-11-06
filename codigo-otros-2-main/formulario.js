
// C
var formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  
  var n = formulario.elements[0]; 
  var e = formulario.elements[1]; 
  var na = formulario.elements[2]; 
  
  var nombre = n.value;
  var edad = e.value;
  
  var i = na.selectedIndex;
  var nacionalidad = na.options[i].value;

  
  console.log(nombre, edad);
  console.log(nacionalidad);

 
  if (nombre.length === 0) {
    n.classList.add("error");
  } else {
    n.classList.remove("error");
  }

  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  } else {
    e.classList.remove("error");
  }

  
  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
});


function agregarInvitado(nombre, edad, nacionalidad) {
  
  switch (nacionalidad) {
    case "ar":
      nacionalidad = "Argentina";
      break;
    case "mx":
      nacionalidad = "Mexicana";
      break;
    case "vnzl":
      nacionalidad = "Venezolana";
      break;
    case "per":
      nacionalidad = "Peruana";
      break;
    default:
      nacionalidad = "Desconocida";
      break;
  }

  
  var lista = document.getElementById("lista-de-invitados");
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");

  
  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidad, elementoLista);

  
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("boton-borrar");
  
  
  botonBorrar.onclick = function() {
    elementoLista.remove(); 
  };

  
  elementoLista.appendChild(botonBorrar);

 
}


function crearElemento(descripcion, valor, contenedor) {
  var spanNombre = document.createElement("span");
  var inputValor = document.createElement("input");
  var espacio = document.createElement("br");

  spanNombre.textContent = descripcion + ": ";
  inputValor.value = valor;
  inputValor.setAttribute("readonly", true); 

  contenedor.appendChild(spanNombre);
  contenedor.appendChild(inputValor);
  contenedor.appendChild(espacio);
}

