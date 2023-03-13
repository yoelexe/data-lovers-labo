import { filterData, example } from './data.js';
// import data from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/harry.js';
// import data from './data/rickandmorty/rickandmorty.js';

/* Traer toda la data con fetch -> Fijarse que diga .json
fetch('./data/harrypotter/harry.json')
.then((response) => response.json())
.then((json) => console.log(json));
*/

/*const userCardTemplate = document.querySelector("[data-user-template]")
fetch('./data/harrypotter/harry.json')
  .then((response) => response.json())
  .then(cardjson => {
    const cardjson = userCardTemplate.textContent.cloneNode(true).children[0]
    console.log(cardjson)
  });*/


/* Siguiente sección*/
let botonSeccion = document.getElementById("hechizos");
botonSeccion.addEventListener("click", (event) => {

});

let botones = document.querySelectorAll(".navigation button")
botones.forEach(function (elemento) {
  elemento.addEventListener('click', (event) => {
    let seccion = event.target.dataset.section;
    let secciones = document.getElementsByTagName("section");
    for (let i = 0; i < secciones.length; i++) {
      secciones[i].style.display = "none";
    }
    document.getElementById(seccion).style.display = "block";
  });
});



const search_wand = document.querySelector('#search-wand');
const box = document.querySelectorAll('.spells-container .box-grid .box')


const box_grid = document.querySelector('#box-grid');
const section2 = document.querySelector('#section2');

const dataSpells = data.spells;
const dataCharacter = data.characters;

search_wand.addEventListener('keyup', () => {
  const name = document.getElementById('search-wand').value.toUpperCase();
  //console.log(name)
})

const intento = dataCharacter.filter(function (dataCharacter) {
  return dataCharacter.house == "Gryffindor";
});

console.log(intento)


// js con el slider
/*
const sliderContainer = document.querySelectorAll('.spells-container')
const right_btn = document.querySelectorAll('.right-btn')
const left_btn = document.querySelectorAll('.left-btn')

sliderContainer.forEach((item, i) => {
  let sliderDimention = item.getBoundingClientRect();
  let sliderWidth = sliderDimention.width;

  right_btn[i].addEventListener('click', () => {
    item.scrollLeft += sliderWidth;
  })

  left_btn[i].addEventListener('click', () => {
    item.scrollLeft -= sliderWidth;
  })
})*/


// Mostrar el template del html pero js
/*
const template = (list) => {
  let templateList = '';
  list.forEach((dataSpells) => {
    const card = `<div class="box" data-title="${dataSpells.name}">
    <h3 class="data-title">Nombre: ${dataSpells.name}</h3>
    <p>Description: ${dataSpells.description}</p>
    <p>Tipo: ${dataSpells.spell_type}</p>
    </div>`;
    templateList += card;
  })
  document.getElementById('box-grid').innerHTML = templateList;
}
template(dataSpells);
*/

// navigation with buttons
/*const dates = document.querySelector('#dates');

dates.addEventListener('click', () => {
  window.location.href = `http://127.0.0.1:5500/src/index.html#${section2.attributes[0].value}`;
})*/

// pruebas en consola

//data.spells.map(wind => console.log(wind.name + ' : ' + wind.spell_type))
console.log(example);
//console.log(data.spells.filter(spells => spells.name === 'Accio').map(wind => wind.name + ' : ' + wind.spell_type))
