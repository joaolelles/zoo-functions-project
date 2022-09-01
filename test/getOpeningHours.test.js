const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const open = 'The zoo is open';
  const close = 'The zoo is closed';
  it('Testa se o zoo estará fechado na segunda', () => {
    expect(getOpeningHours('Monday', '10:00-AM')).toBe(close);
  });
  it('Testa se o zoo estará fechado na quinta às 07h', () => {
    expect(getOpeningHours('Tuesday', '07:00-AM')).toBe(close);
  });
  it('Testa se o zoo estará aberto na quinta às 19h', () => {
    expect(getOpeningHours('Thursday', '07:00-PM')).toBe(open);
  });
  it('Testa se o zoo estará aberto no sábado às 21h', () => {
    expect(getOpeningHours('Saturday', '09:00-PM')).toBe(open);
  });
//   it('', () => {
//     expect;
//   });
//   it('', () => {
//     expect;
//   });
//   it('', () => {
//     expect;
//   });
//   it('', () => {
//     expect;
//   });
//   it('', () => {
//     expect;
//   });
});
