function Header({$target}) {
    const $header = document.createElement('h1');
    $target.appendChild($header);

    this.render = () => {
        $header.textContent = "Minho's Todo-List";
    }

    this.render();
}