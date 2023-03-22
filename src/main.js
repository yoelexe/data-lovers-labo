import {  baseDatos } from './data.js';
// import data from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/harry.js';
// import data from './data/rickandmorty/rickandmorty.js';
/*import { search, example, searchByHome } from './data.js';*/

/*
search_wand.addEventListener('input', () => {
  //const name = document.getElementById('search-wand').value;
  const filtrarDataByName = window.filterData(search_wand);
  printData(filtrarDataByName)
  console.log(filterData)
  

})
*/


// Mostrar el template del html pero js
/*
const template = (list) => {
  let templateList = '';
  list.forEach((dataHarry) => {
    const card = `<div class="box">
    <h3>Nombre: ${dataHarry.name}</h3>
    <p>Descripción: ${dataHarry.description}</p>
    </div>`;
    templateList += card;
  })
  document.getElementById('box-grid').innerHTML = templateList;
}
template(dataHarry);
*/

data.spells.map(wind => console.log(wind.name + ' : ' + wind.spell_type))
console.log(data.spells.filter(spells => spells.name === 'Accio').map(wind => wind.name + ' : ' + wind.spell_type))

/*import { search, example, searchByHome } from './data.js';*/



/* Siguiente sección*/

let botones = document.querySelectorAll(".navigation button")
botones.forEach(function (elemento) {
  elemento.addEventListener('click', (event) => {
    let seccion = event.currentTarget.dataset.section;
    let secciones = document.getElementsByTagName("section");

    if (seccion == 'section2') {
      /* Llamor la funcion desde data js*/
      baseDatos()
    }

    if (seccion == 'section6') {
      /* Llamor la funcion desde data js*/
      baseDatos()
    }

    if (seccion == 'section3') {
      /* Llamor la funcion desde data js*/
      baseDatos()
    }

    if (seccion != 'section1') {
      // Ocultar texto de los botones
      document.querySelectorAll("button span").forEach((span) => {
        span.style.display = 'none'
      })
    } else {
      document.querySelectorAll("button span").forEach((span) => {
        span.style.display = 'inline'
      })
    }

    for (let i = 0; i < secciones.length; i++) {
      secciones[i].style.display = "none";
    }
    document.getElementById(seccion).style.display = "flex";
    const totalResultados = document.getElementById("contenedorspells");
    totalResultados.innerHTML = "";
    document.getElementById("informacion").value = "";
    document.getElementById("busquedaSpell1").value = "";
  });
});
