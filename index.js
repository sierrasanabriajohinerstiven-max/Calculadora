const readline = require('readline');
const { add, subtract, multiply, divide } = require('./src/calculator');

const operations = {
  '1': { label: 'Suma', fn: add },
  '2': { label: 'Resta', fn: subtract },
  '3': { label: 'Multiplicacion', fn: multiply },
  '4': { label: 'Division', fn: divide },
};

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  console.log('Calculadora');
  console.log('1) Suma  2) Resta  3) Multiplicacion  4) Division');
  const choice = await ask('Elige una operacion: ');

  const operation = operations[choice];
  if (!operation) {
    console.log('Opcion invalida');
    rl.close();
    return;
  }

  const a = Number(await ask('Primer numero: '));
  const b = Number(await ask('Segundo numero: '));

  try {
    const result = operation.fn(a, b);
    console.log(`${operation.label}: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    rl.close();
  }
}

main();
