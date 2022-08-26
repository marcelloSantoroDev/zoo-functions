const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se retorna undefined caso não haja parâmetro', () => {
    expect(handlerElephants()).toEqual(undefined);
  });
  it('Verifica se retorna mensagem de erro caso parâmetro não seja uma string', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica se retorna nome da chave caso parâmetro seja o valor de uma chave', () => {
    expect(handlerElephants('name')).toEqual('elephants');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  it('Verifica se retorna array com nome dos residentes caso parâmetro seja names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica se retorna quantidade de residentes caso parâmetro seja count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('Verifica se retorna a media da idade dos elefantes caso o parâmetro seja averageAge', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Verifica se retorna null caso o parâmetro seja vazio', () => {
    expect(handlerElephants('random')).toEqual(null);
  });
});
