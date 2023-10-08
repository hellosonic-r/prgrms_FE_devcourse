function DeleteButton({$parent}) {
    const $button = document.createElement('button');
    $parent.appendChild($button);

    this.render = () => {
        $button.addEventListener('click', (e)=> {
            e.remove();
        })
    }
    
    this.render();
}