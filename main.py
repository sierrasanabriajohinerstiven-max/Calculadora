from src.calculator import add, subtract, multiply, divide

OPERATIONS = {
    '1': ('Suma', add),
    '2': ('Resta', subtract),
    '3': ('Multiplicacion', multiply),
    '4': ('Division', divide),
}


def main():
    print('Calculadora')
    print('1) Suma  2) Resta  3) Multiplicacion  4) Division')
    choice = input('Elige una operacion: ')

    operation = OPERATIONS.get(choice)
    if operation is None:
        print('Opcion invalida')
        return

    label, fn = operation
    a = float(input('Primer numero: '))
    b = float(input('Segundo numero: '))

    try:
        result = fn(a, b)
        print(f'{label}: {result}')
    except ValueError as error:
        print(f'Error: {error}')


if __name__ == '__main__':
    main()
