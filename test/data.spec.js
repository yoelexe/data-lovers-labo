import { baseDatos, filtroHechizo } from '../src/data.js';


describe('baseDatos.busquedaHechizo', () => {
  it('Deberia de devolver un arreglo', () => {
    expect(typeof baseDatos).toBe('function');
  });

  it('returns `baseDatos`', () => {
    expect(baseDatos()).toBe('baseDatos');
  });
});

describe('Colecion de test sobre filtro',()=>{
  it('return undefined',()=>{
    expect(filtroHechizo()).toBe(undefined)
  })
})


