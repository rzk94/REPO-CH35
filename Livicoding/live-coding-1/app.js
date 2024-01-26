/*
! Elizabeth Razo
* Mi entrevistador me comento que noto que dudaba para formular algunas de las extructuras del codigo, pero que le agrado que me enfocara en explicar la logica y lo que queria efectuar en el programa, y ser honesta cuando no sabia como terminar de formular el ejercicio, porque no lo termine durante los 10min.
*/
// Escribe tu código aquí.

document.addEventListener('DOMContentLoaded', function() {
  // Función que devuelve un array con las palabras más largas que la palabra dada
  function bigWords(word, array) {
    return array.filter((item) => item.length > word.length);
  }

  // Función que imprime un array en una lista en el HTML
  function printArray(array) {
    const ul = document.getElementById('myList');

    array.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
  }

  // Array de palabras
  const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];

  // Palabra de referencia
  const referenceWord = 'bocina';

  // Filtrar palabras más largas que la palabra de referencia
  const filteredArray = bigWords(referenceWord, myArray);

  // Imprimir el array filtrado en el HTML
  printArray(filteredArray);
});
