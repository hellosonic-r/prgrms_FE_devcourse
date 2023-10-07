
const $target = document.querySelector('#app');

function ToggleButton( { $target , text, clickCount }) {

    const $button = document.createElement('button');
    let isInit = false;

    this.render = () => {
        $button.textContent = `${text} : ${clickCount}번 클릭`;

        if (!isInit) {
            $target.appendChild($button);

            $button.addEventListener('click', ()=> {
                if ($button.style.color === 'black') {
                    $button.style.color = 'red';
        
                } else {
                    $button.style.color = 'black';
                }
                clickCount++
                $button.textContent = `${text} : ${clickCount}번 클릭`;
                if (clickCount%3 === 0) {
                    alert('세 번째 클릭');
                } 

            })
            isInit = true;
        }
    }

    this.render();
}


new ToggleButton( {
    $target : $target,
    text : 'button1',
    clickCount : 0,
} );

new ToggleButton( {
    $target : $target,
    text : 'button2',
    clickCount : 0,
})