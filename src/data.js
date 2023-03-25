/* Traer data desde el json para filtrado*/

export const filtroHechizo = (spells, busqueda) => {
  if (spells === undefined || busqueda === undefined) return undefined;
  const hallazgo = spells.filter((spell) => {
    return (
      spell.name.toLocaleLowerCase().includes(busqueda) ===
      busqueda.toLocaleLowerCase().includes(busqueda)
    );
  });

  return hallazgo;
};

export const changeInfo = (valores, resultado) => {
  if (valores === undefined || resultado === undefined) return undefined;
  const resultados = valores.filter((valor) => {
    if (resultado === "") {
      return true;
    } else {
      return valor.spell_type === resultado;
    }
  });
  return resultados;
};
