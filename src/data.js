// estas funciones son de ejemplo
import data from './data/harrypotter/harry.js';

let dataSpells= data.spells;

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return `Investigar slice y push`;
};

export const searchByHome = (input, data) => {
  let newData = input.filter((dato) => dato.house === data)
  return newData
}

export const search = (data, inputText) => {
  const result = [];
  data.forEach((eachSpell) => {
    const name_ofSpells = eachSpell.name;
    const lengthText = inputText.length;
    if(name_ofSpells.slice(0, lengthText) === inputText){
      result.push(eachSpell)
    }
  });
  return result;
}
