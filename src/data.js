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
          return `<div class = "spellitem"> Name: ${spell.name} <br> Description: ${spell.description} <br> Mention: ${spell.mention} <br> Other Name: ${spell.other_name} </div>`;
        }).join("");
        const totalResultados = document.getElementById("contenedorspells");
        totalResultados.innerHTML = resultadoDatos;
      });

      const busquedaHechizo = document.getElementById("busquedaSpell1");
      busquedaHechizo.addEventListener("input", () => {
        const busqueda = busquedaHechizo.value;
        const hallazgo = spells.filter((spell) => {
          if (busqueda === "") {
            return true;
          } else {
            return spell.name.toLowerCase() === busqueda.toLowerCase();
          }
        });
        const hallazgoFinal = hallazgo.map(spell => {
          return `<div class = "spellitem"> Name: ${spell.name} <br> Spell type:${spell.spell_type} <br> Description: ${spell.description} <br> Mention: ${spell.mention} <br> Other Name: ${spell.other_name} </div>`;
        }).join("");
        const finalSpell = document.getElementById("contenedorspells");
        finalSpell.innerHTML = hallazgoFinal;
      });
    })
}