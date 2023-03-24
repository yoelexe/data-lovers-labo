import { baseDatos, filtroHechizo, getSpells} from '../src/data.js';

describe('search from spells', () => {
  it('Deberia ser una función', () => {
    expect(typeof getSpells).toBe('function')
  })
})

describe('buscador de hechizos', () => {
  it('Deberia de devolver un arreglo', () => {
    expect(typeof baseDatos).toBe('function');
  });
});

describe('Colecion de test sobre filtro',()=>{
  it('return undefined',()=>{
    expect(filtroHechizo()).toBe(undefined)
  })
})

const potions = [
  { name: "Amortentia", description: "love potion" },
  { name: "Polyjuice Potion", description: "allows the drinker to assume the form of someone else" }
  ];
  describe("Buscador de pociones", () => {
    it('Deberia retornar el filtrado por nombres -> spells', () => {
      const resultpotions = [
        { name: "Amortentia", description: "love potion" }
        ];
        expect(getSpells(potions, 'Amortentia')).toEqual(resultpotions)
  })})
  