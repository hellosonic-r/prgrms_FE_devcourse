function Header({$target, text}) {

    if (!new.target) {
        throw new Error(`'new' 키워드를 사용해서 ${Header.name} 컴포넌트를 생성해주세요.`)
    }
    const $header = document.createElement('h1');

    $target.appendChild($header);

    this.render = () => {
        $header.textContent = text;
    }

    this.render();
}