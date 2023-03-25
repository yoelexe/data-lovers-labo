import { filtroHechizo, changeInfo } from "../src/data.js";

describe("Colección de test sobre busqueda Hechizo -> function", () => {
  it("return function", () => {
    expect(typeof filtroHechizo).toBe("function");
  });
});

describe("Colección de test sobre busqueda Hechizo -> undefined", () => {
  it("return undefined", () => {
    expect(filtroHechizo()).toBe(undefined);
  });
});

describe("Colección de test sobre filtro por Tipo de Hechizo -> function", () => {
  it("return function", () => {
    expect(typeof changeInfo).toBe("function");
  });
});

describe("Colección de test sobre filtro por Tipo de Hechizo -> undefined", () => {
  it("return undefined", () => {
    expect(changeInfo()).toBe(undefined);
  });
});

const dataspell = [
  {
    name: "Aberto",
    spell_type: "Charm",
  },
  {
    name: "Accio",
    spell_type: "Charm",
  },
  {
    name: "Age Line",
    spell_type: "Charm",
  },
];
describe("Buscador de pociones", () => {
  it("Deberia retornar el filtrado por nombres -> spells", () => {
    const resultspell = [
      {
        name: "Aberto",
        spell_type: "Charm",
      },
      {
        name: "Accio",
        spell_type: "Charm",
      },
      {
        name: "Age Line",
        spell_type: "Charm",
      },
    ];
    expect(filtroHechizo(dataspell, "Accio")).toEqual(resultspell);
  });
});
