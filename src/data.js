// estas funciones son de ejemplo
import data from './data/harrypotter/harry.js';

let dataSpells= data.spells;

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return `Investigar slice y push`;
};

export const searchByName = (input, data) => {
  const texto = input.toLowerCase();

  if(input === "" || input === 0 || input === null || data === 0){
    throw new TypeError("ingresar valores")

  }

  let nombreTitle = data.filter((name) => name.title.toLowerCase().indexOf(texto) !== -1)
  return nombreTitle;
}

export const search = (data, inputText) => {
  const result = [];
  data.forEach((e) => {
    const name_ofSpells = e.name;
    const lengthText = inputText.length;
    if(name_ofSpells.slice(0, lengthText) === inputText){
      result.push(e)
    }
  });
  return result;
}
