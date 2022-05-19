alert ('Vamos a jugar a un juego');

const numAleatorio = Math.floor (Math.random()* (100)) +1;


while (true) {
    let num = prompt ('Introduzca un número entre 1 y 100');
    if (numAleatorio == num) {
        alert ('Felicidades! has acertado el numero');
        break;
    }
    else if (num < 1 || num > 100) {
        alert ('El número introducido no es válido');
    }
    else if (num < numAleatorio) {
        alert ('El número secreto es mayor que ' + num);
    }
    else if (num > numAleatorio) {
        alert ('El número secreto es menor que ' + num);
    }
    else {
        alert ('El valor introducido no es válido');
    }
}
