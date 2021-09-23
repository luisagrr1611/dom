/* document.write('Hola desde Javascript'); */

/* Devuelve un arreglo de los elementos que tengan esa etiqueta */
/* const title = document.getElementsByTagName('h1');
title[0].innerHTML = 'Titulo cambiado desde Javascript';

const texto = document.getElementById('text')
texto.innerHTML = 'Este texto esta escrito desde Javascript'
texto.style.background = 'blue';
texto.style.color = 'white';

console.log(text); */
/* Obtiene un elemento por ID */
document.getElementById
/* Obtiene todos los elementos de una clase y devuelve un arreglo */
document.getElementsByClassName
/* Obtiene un elemento por nombre */
document.getElementsByName

const texto = document.querySelector('#text');
texto.textContent = 'Estoy escribiendo desde Javascript';

/* Crear elementos html */
const div = document.createElement('div');
const body = document.querySelector('body');

body.append(div);
