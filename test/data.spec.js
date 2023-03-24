import { baseDatos } from '../src/data.js';


describe('baseDatos', () => {
  it('is a function', () => {
    expect(typeof baseDatos).toBe('function');
  });

  it('returns `baseDatos`', () => {
    expect(baseDatos()).toBe('baseDatos');
  });
});


