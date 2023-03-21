/*import { search, example, searchByHome } from './data.js';*/
import { baseDatos } from './data.js';

/* Traer toda la data con fetch -> Fijarse que diga .json
fetch('./data/harrypotter/harry.json')
.then((response) => response.json())
.then((json) => console.log(json));
*/
const box = document.querySelectorAll('.spells-container .box-grid .box')


/* Siguiente sección*/

let botones = document.querySelectorAll(".navigation button")
botones.forEach(function (elemento) {
  elemento.addEventListener('click', (event) => {
    let seccion = event.currentTarget.dataset.section;
    let secciones = document.getElementsByTagName("section");

    if (seccion === 'section2' || seccion === 'section3' || seccion === 'section4' || seccion === 'section5') {
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
    /* Hechizos*/
    const totalResultados = document.getElementById("contenedorspells");
    totalResultados.innerHTML = "";
    document.getElementById("informacion").value = "";
    document.getElementById("busquedaSpell1").value = "";
    /*Casas de Hogwarts*/
    const totalResultadosCasas = document.getElementById("contenedorhouse");
    totalResultadosCasas.innerHTML = "";
    document.getElementById("ordencasas").value = "";
    document.getElementById("busquedaHouse").value = "";

    /*Pociones*/
    const totalPociones = document.getElementById("contenedorpotions");
    totalPociones.innerHTML = "";
    document.getElementById("ordenselector").value = "";
    document.getElementById("busquedaPotions").value = "";


/* Buscando todos los hechizos */
const search_wand = document.querySelector('#search-wand');
const list = document.querySelector('#container-ul');

const $template = document.querySelector('#spells').content;

const $fragment = document.createDocumentFragment();

// utilizando map
data.spells.map((e) => {
  $template.querySelector("li").textContent = e.name;

  let clone = document.importNode($template ,true);

  $fragment.appendChild(clone);
});

list.appendChild($fragment);

// trabajando con el DOM
search_wand.addEventListener('input', () => {
  const dataImport = data.spells.filter((e) => {
    return e.name.toLocaleLowerCase().includes(search_wand.value);
  });
  list.innerHTML = "";

  dataImport.map((e) => {
    $template.querySelector("li").textContent = e.name;
    let clone = document.importNode($template, true);

// js con el slider

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
})


// Mostrar el template del html pero js



const template = (list) => {
  let templateList = '';
  list.forEach((dataBooks) => {
    const card = `<div class="book">
    <img src="${dataBooks.img}">
    <label class="data-title">Nombre: ${dataBooks.title}</label>
    
    <p>Description: ${dataBooks.author}</p>
    </div>`;
    templateList += card;
  })
  document.getElementById('all-books').innerHTML = templateList;
}
template(dataBooks);
