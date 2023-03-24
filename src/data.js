/* Traer data desde el json para filtrado*/

export const filtroHechizo = (spells, busqueda) => {
  if (spells === undefined || busqueda === undefined) return undefined;
  const hallazgo = spells.filter((spell) => {
    if (busqueda === "") {
      return true;
    } else {
      return (
        spell.name.toLocaleLowerCase().includes(busqueda) ===
        busqueda.toLocaleLowerCase().includes(busqueda)
      );
    }
  });

  const hallazgoFinal = hallazgo
    .map((spell) => {
      return `<div class = "spellitem"> 
    <strong>Name:</strong> ${spell.name} <br>
    <strong>Spell type:</strong> ${spell.spell_type} <br>
    
    <strong>Mention:</strong> ${spell.mention} <br>
    <strong>Other Name:</strong> ${spell.other_name} </div>`;
    })
    .join("");

  const finalSpell = document.getElementById("contenedorspells");
  if (hallazgoFinal === "") {
    finalSpell.innerHTML = `<div class="final">No se encontró información</div>`;
  } else {
    finalSpell.innerHTML = hallazgoFinal;
  }
  return hallazgo;
};
