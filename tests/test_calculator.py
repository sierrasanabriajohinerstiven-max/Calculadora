import pytest

from src.calculator import add, subtract, multiply, divide


class TestAdd:
    def test_suma_dos_numeros_positivos(self):
        assert add(2, 3) == 5

    def test_suma_numeros_negativos(self):
        assert add(-2, -3) == -5

    def test_suma_con_decimales(self):
        assert add(0.1, 0.2) == pytest.approx(0.3)


class TestSubtract:
    def test_resta_dos_numeros_positivos(self):
        assert subtract(5, 3) == 2

    def test_resta_que_resulta_en_negativo(self):
        assert subtract(3, 5) == -2


class TestMultiply:
    def test_multiplica_dos_numeros_positivos(self):
        assert multiply(4, 3) == 12

    def test_multiplica_por_cero(self):
        assert multiply(5, 0) == 0

    def test_multiplica_numeros_negativos(self):
        assert multiply(-2, -3) == 6


class TestDivide:
    def test_divide_dos_numeros_positivos(self):
        assert divide(10, 2) == 5

    def test_divide_con_resultado_decimal(self):
        assert divide(1, 4) == 0.25

    def test_lanza_error_al_dividir_entre_cero(self):
        with pytest.raises(ValueError, match='No se puede dividir entre cero'):
            divide(10, 0)
