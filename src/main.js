import { filterData, example } from './data.js';
// import data from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/harry.js';
// import data from './data/rickandmorty/rickandmorty.js';

const search_wand = document.querySelector('#search-wand');
const box_grid =document.querySelector('#box-grid');
const section2 = document.querySelector('#section2');

const dataHarry = data.spells;

search_wand.addEventListener('input', () => {
  //const name = document.getElementById('search-wand').value;
  const filtrarDataByName = window.filterData(search_wand);
  printData(filtrarDataByName)
  console.log(filterData)
  

})

// js con el slider
const sliderContainer = document.querySelectorAll('.spells-container')
const right_btn = document.querySelectorAll('.right-btn')
const left_btn = document.querySelectorAll('.left-btn')

sliderContainer.forEach((item, i) => {
  let sliderDimention = item.getBoundingClientRect();
  let sliderWidth = sliderDimention.width;

  left_btn[i].addEventListener('click', () => {
    item.scrollLeft += sliderWidth;
  })

  right_btn[i].addEventListener('click', () => {
    item.scrollLeft -= sliderWidth;
  })
})


// Mostrar el template del html pero js
const template = (list) => {
  let templateList = '';
  list.forEach((dataHarry) => {
    const card = `<div class="box">
    <h3>Nombre: ${dataHarry.name}</h3>
    <p>Descripción: ${dataHarry.description}</p>
    <p>Tipo: ${dataHarry.spell_type}</p>
    </div>`;
    templateList += card;
  })
  document.getElementById('box-grid').innerHTML = templateList;
}
template(dataHarry);

// navigation with buttons
const dates = document.querySelector('#dates');

dates.addEventListener('click', () => {
  window.location.href = `http://127.0.0.1:5500/src/index.html#${section2.attributes[0].value}`;
})

// pruebas en consola

data.spells.map(wind => console.log(wind.name + ' : ' + wind.spell_type))
console.log(example);
console.log(data.spells.filter(spells => spells.name === 'Accio').map(wind => wind.name + ' : ' + wind.spell_type))
