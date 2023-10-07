
const $target = document.querySelector('#app');

function ToggleButton( { $target , text, onClick }) {
    const $button = document.createElement('button');
    $target.appendChild($button);
    let clickCount = 0;
    
    this.render = () => {
        $button.textContent = text;
        $button.addEventListener('click', () => {
            clickCount++
            if ($button.style.textDecoration == 'line-through') {
                $button.style.textDecoration = 'none';
            } else {
                $button.style.textDecoration = 'line-through';
            }

            if (onClick) {
                onClick(clickCount);
            }
        })
        
    }
        

    this.render();

}


new ToggleButton( {
    $target : $target,
    text : 'button1',
    onClick : (clickCount) => {
        if (clickCount%3 === 0) {
            alert('3번째 클릭');
        }
    },
} );

new ToggleButton( {
    $target : $target,
    text : 'button2',
    onClick : (clickCount) => {
        if (clickCount%2 === 0) {
            alert('2번째 클릭')
        }
    }
})