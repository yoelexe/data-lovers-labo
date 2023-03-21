/* Traer data desde el json para filtrado*/

export const baseDatos = () => {
  console.log("base de datos");
  fetch('./data/harrypotter/harry.json')
    .then(response => response.json())
    .then(data => {

      let spells = data['spells']
      let potions = data['potions']

      /*Presentacion de la informacion hechizos */
      const datosInicialesSpells = spells.map(spell => {
        return `<div class = "spellitem"> 
        <strong>Name:</strong> ${spell.name} <br>
        <strong>Spell type:</strong> ${spell.spell_type} <br>
        <strong>Description:</strong> ${spell.description} <br>
        <strong>Mention:</strong> ${spell.mention} <br>
        <strong>Other Name:</strong> ${spell.other_name} </div>`;
      }).join("");
      const contenedorspells = document.getElementById("contenedorspells");
      contenedorspells.innerHTML = datosInicialesSpells;

      /*Presentacion de la informacion pociones */
      const datosInicialesPotions = potions.map(potion => {
        return `<div class = "potionItem"> 
        <strong>Name:</strong> ${potion.name} <br>    
        <strong>Description:</strong> ${potion.description} <br>
         </div>`;
      }).join("");
      const contenedorPotions = document.getElementById("contenedorpotions");
      contenedorPotions.innerHTML = datosInicialesPotions;


      /*Filtro por tipos de Hechizos */

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

      /*Buscador Hechizos*/

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

      /*Ordenado de pociones ascendente y descendente */
      const orden = document.getElementById("ordenselector");
      orden.addEventListener("change", () => {
        const valorOrden = orden.value;
        let pocionesOrdenadas = JSON.parse(JSON.stringify(potions)); /*Copia profunda de data json*/
        if (valorOrden != '') {
          pocionesOrdenadas = pocionesOrdenadas.sort((a, b) => {           /*Ascendente*/ /*Sort modifica el arreglo sobre el que actua*/
            return a.name.localeCompare(b.name)
          });

          if (valorOrden === 'Descendente') {
            pocionesOrdenadas = pocionesOrdenadas.reverse()           /*Descendente*/
          }
        }

        const resultadosOrdenados = pocionesOrdenadas.map(potion => {
          return `<div class = "potionItem"> 
          <strong>Name:</strong> ${potion.name} <br>    
          <strong>Description:</strong> ${potion.description} <br>
           </div>`;
        }).join("");
        const totalfinalOrden = document.getElementById("contenedorpotions");
        totalfinalOrden.innerHTML = resultadosOrdenados;

      });
      /* Buscador Pociones*/

      const busquedaPociones = document.getElementById("busquedaPotions");
      busquedaPociones.addEventListener("input", () => {
        const encuentro = busquedaPociones.value;
        const busquedaP = potions.filter((potion) => {
          if (encuentro === "") {
            return true;
          } else {
            return potion.name.toLowerCase().includes(encuentro.toLowerCase()); /* Agregar opciones del buscador*/
          }
        });
        const encuentroFinal = busquedaP.map(potion => {
          return `<div class = "potionItem"> 
          <strong>Name:</strong> ${potion.name} <br>    
          <strong>Description:</strong> ${potion.description} <br>
           </div>`;
        }).join("");
        const finalPotion = document.getElementById("contenedorpotions");
        if (encuentroFinal === "") {
          finalPotion.innerHTML = `<div class="final">No se encontró información</div>`;
        } else {
          finalPotion.innerHTML = encuentroFinal;
        }
      }
      )


    })


}