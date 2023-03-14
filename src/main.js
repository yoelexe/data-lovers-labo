import { filterData, example } from './data.js';
// import data from './data.js';
// import data from './data/lol/lol.js';
/*import data from './data/harrypotter/harry.js';
// import data from './data/rickandmorty/rickandmorty.js';*/

/* Traer data desde el json para filtrado*/
function baseDatos() {
  fetch('./data/harrypotter/harry.json')
    .then(response => response.json())
    .then(data => {
      let spells = data['spells']
      const filtro = document.getElementById("informacion");
      filtro.addEventListener("change", () => {
        const valorFiltro = filtro.value;
        const resultados = spells.filter((spell) => {
          if (valorFiltro === "") {
            return true;
          } else {
            return spell.spell_type === valorFiltro;
          }
        });
        const resultadoDatos = resultados.map(spell => {
          return `<li>${spell.name} - ${spell.description} - ${spell.mention} - ${spell.other_name} </li>`;
        }).join("");
        const totalResultados = document.getElementById("contenedorspells");
        totalResultados.innerHTML = resultadoDatos;
      });
    });
}

baseDatos();

/* Siguiente sección*/
let botonSeccion = document.getElementById("hechizos");
botonSeccion.addEventListener("click", (event) => {

});

let botones = document.querySelectorAll(".navigation button")
botones.forEach(function (elemento) {
  elemento.addEventListener('click', (event) => {
    let seccion = event.currentTarget.dataset.section;
    let secciones = document.getElementsByTagName("section");
    for (let i = 0; i < secciones.length; i++) {
      secciones[i].style.display = "none";
    }
    document.getElementById(seccion).style.display = "flex";
  });
});

/**/

/*const search_wand = document.querySelector('#search-wand');
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
})*/
