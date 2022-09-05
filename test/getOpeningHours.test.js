const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const open = 'The zoo is open';
  const close = 'The zoo is closed';
  const horários = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };

  it('Testa se o zoo estará fechado na segunda', () => expect(getOpeningHours('Monday', '10:00-AM')).toBe(close));
  it('Testa se o zoo estará fechado na quinta às 07h', () => expect(getOpeningHours('Tuesday', '07:00-AM')).toBe(close));
  it('Testa se o zoo estará aberto na quinta às 19h', () => expect(getOpeningHours('Thursday', '07:00-PM')).toBe(open));
  it('Testa se o zoo estará aberto no sábado às 21h', () => expect(getOpeningHours('Saturday', '09:00-PM')).toBe(open));
  it('Testa se o zoo estará fechado no sábado às 22h', () => expect(getOpeningHours('Saturday', '10:00-PM')).toBe(close));
  it('Testa se o zoo estará fechado no sexta às 9h', () => expect(getOpeningHours('Friday', '09:59-AM'))
    .toBe(close));
  it('Testa se o dia for escrito incorretamente', () => expect(() => getOpeningHours('Fri', '02:50-PM'))
    .toThrow('The day must be valid. Example: Monday'));
  it('Testa se não foi passado argumentos', () => expect(getOpeningHours()).toEqual(horários));
  it('Testa se os minutos estão entre 0 e 59', () => expect(() => getOpeningHours('Sunday', '02:97-PM'))
    .toThrow('The minutes must be between 0 and 59'));
  it('Testa se os horários estão com a formatação incorreta', () => expect(() => getOpeningHours('Monday', '04:20-MJ'))
    .toThrow('The abbreviation must be \'AM\' or \'PM\''));
});
