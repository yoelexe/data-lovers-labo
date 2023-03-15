/* estas funciones son de ejemplo
import data from './data/harrypotter/harry.js';

let dataSpells = data.spells;

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return `Investigar slice y push`;
};

export const searchByHome = (input, data) => {
  let newData = input.filter((dato) => dato.house === data)
  return newData 
}*/


/* Buscador*/
export const search = (data, inputText) => {
  const result = [];
  data.forEach((eachSpell) => {
    const name_ofSpells = eachSpell.name;
    const lengthText = inputText.length;
    if (name_ofSpells.slice(0, lengthText) === inputText) {
      result.push(eachSpell)
    }
  });
  return result;
}

/* Traer data desde el json para filtrado*/
export const baseDatos = () => {
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
          return `<div class = "spellitem">${spell.name} - ${spell.description} - ${spell.mention} - ${spell.other_name} </div>`;
        }).join("");
        const totalResultados = document.getElementById("contenedorspells");
        totalResultados.innerHTML = resultadoDatos;
      });
    });
}

