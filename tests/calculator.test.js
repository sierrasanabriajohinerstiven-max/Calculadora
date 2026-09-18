const { add, subtract, multiply, divide } = require('../src/calculator');

describe('add', () => {
  test('suma dos numeros positivos', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('suma numeros negativos', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('suma con decimales', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('subtract', () => {
  test('resta dos numeros positivos', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('resta que resulta en negativo', () => {
    expect(subtract(3, 5)).toBe(-2);
  });
});

describe('multiply', () => {
  test('multiplica dos numeros positivos', () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test('multiplica por cero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  test('multiplica numeros negativos', () => {
    expect(multiply(-2, -3)).toBe(6);
  });
});

describe('divide', () => {
  test('divide dos numeros positivos', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide con resultado decimal', () => {
    expect(divide(1, 4)).toBe(0.25);
  });

  test('lanza un error al dividir entre cero', () => {
    expect(() => divide(10, 0)).toThrow('No se puede dividir entre cero');
  });
});
