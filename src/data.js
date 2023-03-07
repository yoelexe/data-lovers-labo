// estas funciones son de ejemplo
const harry = window.harry;

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return `hola`;
};

export const filterData = (string) => {
  const search = string.charAt(0).toUpperCase()  + string.slice(1);
  const searchResult = [];

  harry.harry.forEach(element => {
    if(element.name.indexOf(search) !== -1){
      searchResult.push(element);
    }
  })

  return searchResult;


};
