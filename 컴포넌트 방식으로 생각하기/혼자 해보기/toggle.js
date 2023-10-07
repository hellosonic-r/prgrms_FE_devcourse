// 버튼을 3개를 만든다.

// 버튼 1

const $container = document.createDocumentFragment();


const $button1 = document.createElement('button');
$button1.textContent = 'button1';

const $target = document.querySelector('#app');

// 버튼 2
const $button2 = document.createElement('button');
$button2.textContent = 'button2';

// 버튼 3
const $button3 = document.createElement('button');
$button3.textContent = 'button3';

$container.appendChild($button1);
$container.appendChild($button2);
$container.appendChild($button3);

$target.appendChild($container);

document.querySelectorAll('button').forEach($button => {
    addEventListener('click', (e) => {
        const { target } = e;
        target.style.textDecoration === 'line-through' ? target.style.textDecoration = 'none' : target.style.textDecoration = 'line-through';
    })
})

