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
      const datosInicialesPotions = potions.map(spell => {
        return `<div class = "potionItem"> 
        <strong>Name:</strong> ${potions.name} <br>    
        <strong>Description:</strong> ${potions.description} <br>
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

      /*Filtro por tipos de Pociones */
      const orden = document.getElementById("descripcion");
      orden.addEventListener("change", () => {
        const valorOrden = orden.value;
        const finalOrden = potions.sort((a, b) => {
          if (a.name > b.name) {
            return valorOrden === "Ascendente" ? 1 : -1; // si el orden es ascendente, se retorna 1, de lo contrario, se retorna -1
          } else if (a.name < b.name) {
            return valorOrden === "Descendente" ? -1 : 1; // si el orden es ascendente, se retorna -1, de lo contrario, se retorna 1
          } else {
            // Si los nombres son iguales, se utiliza el índice para continuar ordenando
            return potions.indexOf(a) - potions.indexOf(b);
          }
        });

        const resultadOrden = finalOrden.map(potion => {
          return `<div class = "potionItem"> 
          <strong>Name:</strong> ${potion.name} <br>    
          <strong>Description:</strong> ${potion.description} <br>
           </div>`;
        }).join("");
        const totalfinalOrden = document.getElementById("contenedorpotions");
        totalfinalOrden.innerHTML = resultadOrden;
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