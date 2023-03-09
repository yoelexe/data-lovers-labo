// estas funciones son de ejemplo
import data from './data/harrypotter/harry.js';

const dataHarry = data.spells;

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return `hola`;
};

export const filterData = (string) => {
  const search = string.charAt(0).toUpperCase()  + string.slice(1);
  const searchResult = [];

  

  dataHarry.forEach(element => {
    if(element.name.indexOf(search) !== -1){
      searchResult.push(element);
    }
  })

  return searchResult;


};
