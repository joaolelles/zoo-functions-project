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
//   it('Testa a popularidade dos elefantes', () => {
//     expect(handlerElephants('popularity')).toBe(5);
//   });
});
