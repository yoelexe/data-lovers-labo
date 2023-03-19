import { search, example, searchByName } from './data.js';
// import data from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/harry.js';
// import data from './data/rickandmorty/rickandmorty.js';

/* Traer toda la data con fetch -> Fijarse que diga .json
fetch('./data/harrypotter/harry.json')
.then((response) => response.json())
.then((json) => console.log(json));
*/



const spells_container = document.querySelector('#spells-container')
const section2 = document.querySelector('#section2');

const dataHarry = data.spells;
const dataCharacter = data.characters;
const dataBooks = data.books;



const intento = dataCharacter.filter(function(dataCharacter){
  return dataCharacter.house == "Gryffindor";
});

console.log(intento)



/* Buscando todos los hechizos */
/*
const search_wand = document.querySelector('#search-wand');
const box_grid =document.querySelector('#box-grid');

const $template = document.querySelector('#spellsTemplate').content;

const $fragment = document.createDocumentFragment();

// utilizando map
data.spells.map((e) => {
  $template.querySelector("h3").textContent = e.name;
  $template.querySelector("h4").textContent = e.spell_type;
  let clone = document.importNode($template ,true);

  $fragment.appendChild(clone);
});

box_grid.appendChild($fragment);

// trabajando con el DOM
search_wand.addEventListener('input', () => {
  const dataImport = data.spells.filter((e) => {
    return e.name.toLocaleLowerCase().includes(search_wand.value);
  });
  box_grid.innerHTML = "";

  dataImport.map((e) => {
    $template.querySelector("h3").textContent = e.name;
    let clone = document.importNode($template, true);

    $fragment.appendChild(clone);
  });

  box_grid.appendChild($fragment);
})
*/


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

// pruebas en consola

//data.spells.map(wind => console.log(wind.name + ' : ' + wind.spell_type))
console.log(example);
//console.log(data.spells.filter(spells => spells.name === 'Accio').map(wind => wind.name + ' : ' + wind.spell_type))
