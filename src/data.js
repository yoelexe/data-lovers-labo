
/* Traer data desde el json para filtrado*/

export const baseDatos = () => {
  console.log("base de datos");
  fetch('./data/harrypotter/harry.json')
    .then(response => response.json())
    .then(data => {

      // traer la información de spells
      let spells = data['spells']
      const datosIniciales = spells.map(spell => {
        return `<div class = "spellitem"> 
        <strong>Name:</strong> ${spell.name} <br>
        <strong>Spell type:</strong> ${spell.spell_type} <br>
        
        <strong>Mention:</strong> ${spell.mention} <br>
        <strong>Other Name:</strong> ${spell.other_name} </div>`;
      }).join("");
      const contenedorspells = document.getElementById("contenedorspells");
      contenedorspells.innerHTML = datosIniciales;

      // traer la información de fun-facts
      let funfacts = data['funFacts']
      const mostrarfunFacts = funfacts.map(funfact => {
        return `<div class="funfacts" id="funfacts">
        <div class="card-funfact" id="card-funfact">
        <h2>${funfact.type}</h2>
        <p>${funfact.content}</p>
        </div>
        </div>`;
      }).join("");
      const card_funfact = document.getElementById("all-funfacts");
      card_funfact.innerHTML = mostrarfunFacts; 

      // traer la información de books
      let books = data['books']
      const mostrarbooks = books.map(book => {
        return `
        <div class="book-card">
          <div class="book-card__cover">
            <div class="book-card__book">
            <div class="book-card__book-front">
              <img src="" alt="" class=".book-card__img">
              </div>
            <div class="book-card__book-back"></div>
              <div class="book-card__book-side"></div>
              </div>
              <div class="book-card__title">
                ${book.title}
              </div>
              <div class="book-card__author">
                <p>${book.description}</p>
              </div>
            </div>
          </div>`;
      }).join("");
      const all_books = document.getElementById("all-books");
      all_books.innerHTML = mostrarbooks;

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
          
          <strong>Mention:</strong> ${spell.mention} <br>
          <strong>Other Name:</strong> ${spell.other_name} </div>`;
        }).join("");
        const totalResultados = document.getElementById("contenedorspells");
        totalResultados.innerHTML = resultadoDatos;
      });

      /*Buscador*/

      const busquedaHechizo = document.getElementById("busquedaSpell1");
      busquedaHechizo.addEventListener("keyup", () => {
        const busqueda = busquedaHechizo.value;
        const hallazgo = spells.filter((spell) => {
          if (busqueda === "") {
            return true;
          } else {
            return spell.name.toLocaleLowerCase().includes(busqueda) === busqueda.toLocaleLowerCase().includes(busqueda);
          }
        });
        const hallazgoFinal = hallazgo.map(spell => {
          return `<div class = "spellitem"> 
          <strong>Name:</strong> ${spell.name} <br>
          <strong>Spell type:</strong> ${spell.spell_type} <br>
          
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