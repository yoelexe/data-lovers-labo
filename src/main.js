import { search, example, searchByHome } from './data.js';
// import data from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/harry.js';
// import data from './data/rickandmorty/rickandmorty.js';

/* Traer toda la data con fetch -> Fijarse que diga .json
fetch('./data/harrypotter/harry.json')
.then((response) => response.json())
.then((json) => console.log(json));
*/
const box = document.querySelectorAll('.spells-container .box-grid .box')


const box_grid =document.querySelector('#box-grid');
const spells_container = document.querySelector('#spells-container')
const section2 = document.querySelector('#section2');

const dataHarry = data.spells;
const dataCharacter = data.characters;



const intento = dataCharacter.filter(function(dataCharacter){
  return dataCharacter.house == "Gryffindor";
});

console.log(intento)


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

    $fragment.appendChild(clone);
  });

  list.appendChild($fragment);
})

/*
search_wand.addEventListener('input', () => {
  let inputText = search_wand.value;
  const results =  dataCharacter.filter(element => {
    return element.name === inputText;
  })
  console.log(results)
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
  list.forEach((dataCharacter) => {
    const card = `<div class="box">
    <h3 class="data-title">Nombre: ${dataCharacter.name}</h3>
    <p>Description: ${dataCharacter.species}</p>
    <p>Tipo: ${dataCharacter.gender}</p>
    <p>Tipo: ${dataCharacter.house}</p>
    </div>`;
    templateList += card;
  })
  document.getElementById('box-grid').innerHTML = templateList;
}
template(dataCharacter);



// navigation with buttons
/*
const dates = document.querySelector('#dates');

dates.addEventListener('click', () => {
  window.location.href = `http://127.0.0.1:5500/src/index.html#${section2.attributes[0].value}`;
})
*/

// pruebas en consola

//data.spells.map(wind => console.log(wind.name + ' : ' + wind.spell_type))
console.log(example);
//console.log(data.spells.filter(spells => spells.name === 'Accio').map(wind => wind.name + ' : ' + wind.spell_type))
