
const $target = document.querySelector('#app');

function ToggleButton( { $target , text}) {

    const $button = document.createElement('button');
    $target.appendChild($button);

    this.render = () => {
        $button.textContent = text;
    }

    this.render();
}


new ToggleButton( {
    $target : $target,
    text : 'button1'
} );

new ToggleButton( {
    $target : $target,
    text : 'button2'
})