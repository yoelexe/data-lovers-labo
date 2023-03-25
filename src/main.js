import { filtroHechizo, changeInfo } from "./data.js";
import data from "./data/harrypotter/harry.js";

const dataSpells = data.spells;

export const baseDatos = () => {
  console.log("base de datos");
  fetch("./data/harrypotter/harry.json")
    .then((response) => response.json())
    .then((data) => {
      // traer la información de spells
      let spells = data["spells"];
      const datosIniciales = spells
        .map((spell) => {
          return `<div class = "spellitem"> 
        <strong>Name:</strong> ${spell.name} <br>
        <strong>Spell type:</strong> ${spell.spell_type} <br>
        
        <strong>Mention:</strong> ${spell.mention} <br>
        <strong>Other Name:</strong> ${spell.other_name} </div>`;
        })
        .join("");
      const contenedorspells = document.getElementById("contenedorspells");
      contenedorspells.innerHTML = datosIniciales;

      // traer la información de fun-facts
      let funfacts = data["funFacts"];
      const mostrarfunFacts = funfacts
        .map((funfact) => {
          return `<div class="funfacts" id="funfacts">
        <div class="card-funfact" id="card-funfact">
        <h2>${funfact.type}</h2>
        <p>${funfact.content}</p>
        </div>
        </div>`;
        })
        .join("");
      const card_funfact = document.getElementById("all-funfacts");
      card_funfact.innerHTML = mostrarfunFacts;

      // traer la información de books
      let books = data["books"];
      const mostrarbooks = books
        .map((book) => {
          return `
        <div class="book-card">
          <div class="book-card__cover">
            <div class="book-card__book">
            <div class="book-card__book-front">
              <img src="${book.images}" alt="" class=".book-card__img">
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
        })
        .join("");
      const all_books = document.getElementById("all-books");
      all_books.innerHTML = mostrarbooks;

      const filtro = document.getElementById("informacion");
      filtro.addEventListener("change", () => {
        const valorFiltro = filtro.value;
        const resultados = changeInfo(dataSpells, valorFiltro);
        const resultadoDatos = resultados
          .map((spell) => {
            return `<div class = "spellitem"> 
          <strong>Name:</strong> ${spell.name} <br>
          <strong>Spell type:</strong> ${spell.spell_type} <br>
          <strong>Mention:</strong> ${spell.mention} <br>
          <strong>Other Name:</strong> ${spell.other_name} </div>`;
          })
          .join("");
        const totalResultados = document.getElementById("contenedorspells");
        totalResultados.innerHTML = resultadoDatos;
      });

      /*Buscador*/
      const busquedaHechizo = document.getElementById("busquedaSpell1");
      busquedaHechizo.addEventListener("input", () => {
        const busqueda = busquedaHechizo.value.toLowerCase();

        const hallazgo = filtroHechizo(dataSpells, busqueda);
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
      });
    });
};

const botones = document.querySelectorAll(".navigation button");
botones.forEach(function (elemento) {
  elemento.addEventListener("click", (event) => {
    let seccion = event.currentTarget.dataset.section;
    let secciones = document.getElementsByTagName("section");

    if (
      seccion === "section2" ||
      seccion === "section3" ||
      seccion === "section4" ||
      seccion === "section5"
    ) {
      /* Llamor la funcion desde data js*/
      baseDatos();
      console.log("trear la función");
    }

    if (seccion == "section6") {
      /* Llamor la funcion desde data js*/
      baseDatos();
    }

    if (seccion == "section3") {
      /* Llamor la funcion desde data js*/
      baseDatos();
    }

    if (seccion != "section1") {
      // Ocultar texto de los botones
      document.querySelectorAll("button span").forEach((span) => {
        span.style.display = "none";
      });
    } else {
      document.querySelectorAll("button span").forEach((span) => {
        span.style.display = "inline";
      });
    }

    for (let i = 0; i < secciones.length; i++) {
      secciones[i].style.display = "none";
    }
    document.getElementById(seccion).style.display = "flex";

    /* Hechizos*/
    const totalResultados = document.getElementById("contenedorspells");
    totalResultados.innerHTML = "";
    document.getElementById("informacion").value = "";
    document.getElementById("busquedaSpell1").value = "";

    /*Casas de Hogwarts*/
    const totalResultadosCasas = document.getElementById("contenedorhouse");
    totalResultadosCasas.innerHTML = "";
    document.getElementById("ordencasas").value = "";
    document.getElementById("busquedaHouse").value = "";

    /*Pociones*/
    const totalPociones = document.getElementById("contenedorpotions");
    totalPociones.innerHTML = "";
    document.getElementById("ordenselector").value = "";
    document.getElementById("busquedaPotions").value = "";
  });
});
