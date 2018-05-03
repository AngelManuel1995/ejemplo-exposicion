const { argv } = require('yargs');

const { a, b, funcion } = argv;

switch (funcion) {
    case 'sumar':
        console.log('>>> Suma: ', a + b);
        break;
    case 'restar':
        console.log('>>> Resta: ', a - b);
        break;
    default:
        console.log('sin operación');
}

//Comentario de prueba
// Otro comentario
