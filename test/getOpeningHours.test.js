const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se retorna objeto caso não seja passado parâmetro', () => {
    expect(getOpeningHours()).toEqual({ Friday: { close: 8, open: 10 }, Monday: { close: 0, open: 0 }, Saturday: { close: 10, open: 8 }, Sunday: { close: 8, open: 8 }, Thursday: { close: 8, open: 10 }, Tuesday: { close: 6, open: 8 }, Wednesday: { close: 6, open: 8 } });
  });
  it('Verifica se retorna the zoo is closes', () => {
    expect(getOpeningHours('Monday', '9:00-AM')).toEqual('The zoo is closed');
  });
  it('Verifica se retorna the zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Verifica se retorna dia inválido', () => {
    expect(() => getOpeningHours('Thu', '09:00-PM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Verifica se retorna erro de abreviação', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Verifica se retorna mensagem de erro com hora em letra', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  it('Verifica se retorna mensagem de erro com minuto em letra', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  it('Verifica se retorna mensagem de erro caso a hora não esteja entre 0 e 12', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Verifica se retorna mensagem de erro caso os minutos sejam passados erroneamente', () => {
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
