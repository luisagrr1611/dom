const $btn = document.querySelector('#btn');

/* mouseover detecta cuando el mouse pasa encima */
$btn.addEventListener('click', () => {
    console.log('Me presionaste');
});

const $inpText = document.querySelector('#text');

/* $inpText.addEventListener('keydown', () => {
    console.log('Escribiste algo');
}); */
/* keydown deja un espacio antes y despues */

$inpText.addEventListener('keyup', (e) => {
    console.log(e.target.value);
});