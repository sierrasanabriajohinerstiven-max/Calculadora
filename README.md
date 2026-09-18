# Calculadora

Calculadora simple en Python con las cuatro operaciones basicas: suma, resta, multiplicacion y division.

## Uso

```bash
python main.py
```

## Pruebas

```bash
pip install -r requirements-dev.txt
pytest
```

## Estructura

- `src/calculator.py` — logica de las operaciones.
- `main.py` — interfaz de linea de comandos.
- `tests/test_calculator.py` — pruebas unitarias con pytest.
- `.github/workflows/ci.yml` — integracion continua: ejecuta las pruebas en cada push y pull request.
