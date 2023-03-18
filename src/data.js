/* Traer data desde el json para filtrado*/

export const baseDatos = () => {
  console.log("base de datos");
  fetch('./data/harrypotter/harry.json')
    .then(response => response.json())
    .then(data => {
      let spells = data['spells']
      /*Presentacion de la informacion */

      const datosIniciales = spells.map(spell => {
        return `<div class = "spellitem"> 
        <strong>Name:</strong> ${spell.name} <br>
        <strong>Spell type:</strong> ${spell.spell_type} <br>
        <strong>Description:</strong> ${spell.description} <br>
        <strong>Mention:</strong> ${spell.mention} <br>
        <strong>Other Name:</strong> ${spell.other_name} </div>`;
      }).join("");
      const contenedorspells = document.getElementById("contenedorspells");
      contenedorspells.innerHTML = datosIniciales;

      /*Filtro por tipos */

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
          return `<div class = "spellitem"> 
          <strong>Name:</strong> ${spell.name} <br>
          <strong>Spell type:</strong> ${spell.spell_type} <br>
          <strong>Description:</strong> ${spell.description} <br>
          <strong>Mention:</strong> ${spell.mention} <br>
          <strong>Other Name:</strong> ${spell.other_name} </div>`;
        }).join("");
        const totalResultados = document.getElementById("contenedorspells");
        totalResultados.innerHTML = resultadoDatos;
      });

      /*Buscador*/

      const busquedaHechizo = document.getElementById("busquedaSpell1");
      busquedaHechizo.addEventListener("input", () => {
        const busqueda = busquedaHechizo.value;
        const hallazgo = spells.filter((spell) => {
          if (busqueda === "") {
            return true;
          } else {
            return spell.name.toLowerCase().includes(busqueda.toLowerCase()); /* Agregar opciones del buscador*/
          }
        });
        const hallazgoFinal = hallazgo.map(spell => {
          return `<div class = "spellitem"> 
          <strong>Name:</strong> ${spell.name} <br>
          <strong>Spell type:</strong> ${spell.spell_type} <br>
          <strong>Description:</strong> ${spell.description} <br>
          <strong>Mention:</strong> ${spell.mention} <br>
          <strong>Other Name:</strong> ${spell.other_name} </div>`;
        }).join("");
        const finalSpell = document.getElementById("contenedorspells");
        if (hallazgoFinal === "") {
          finalSpell.innerHTML = `<div class="final">No se encontró información</div>`;
        } else {
          finalSpell.innerHTML = hallazgoFinal;
        }
      });
    })
}