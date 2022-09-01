const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Testa se o array de nomes que possui o nome Bea', () => {
    expect(handlerElephants('names')).toContain('Bea');
  });
  it('Testa a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('Testa se o parâmetro está vazio', () => {
    expect(handlerElephants(undefined)).toBeUndefined();
  });
  it('Testa a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Testa a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Testa a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('Testa se passado um objeto vazio', () => {
    expect(handlerElephants({})).toContain('Parâmetro inválido, é necessário uma string');
  });
  it('Testa se passado uma string que não contempla uma funcionalidade', () => {
    expect(handlerElephants('')).toBeNull();
  });
});
