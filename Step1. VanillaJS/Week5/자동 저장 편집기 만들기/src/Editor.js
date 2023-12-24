export default function Editor( {$target, initialState = {
    title: '',
    content: '',
}, onEditing} ) {
    const $editor = document.createElement('div');

    let isInitialize = false;

    this.state = initialState;

    $editor.style.width = '400px';
    $editor.style.height = '400px';

    $target.appendChild($editor);

    this.setState = nextState => {
        this.state = nextState;
        $editor.querySelector('[name=title]').value = this.state.title;
        $editor.querySelector('[name=content]').value = this.state.content;
        this.render();
    }



    this.render = () => {
        if(!isInitialize) {
            $editor.innerHTML = `
                <input type="text" name="title" style="width:400px" value="${this.state.title}">
                <textarea name="content" style="width:400px; height:400px">${this.state.content}</textarea>
            `
            isInitialize = true;
        }

    }
    this.render();


    $editor.addEventListener('keyup' ,e => {
        const { target } = e;

        const name = target.getAttribute('name');
        
        // state의 name속성(title, value) 에 빈 문자열이 저장되어 있지 않으면
        if (this.state[name] !== undefined ) { // name='title', name='content'이냐 (방어코드)
            // 타자가 입력될 때 마다 nextState 갱신
            const nextState = {
                ...this.state,
                [name] : target.value
            }
            // textarea 안에 문자열 다시 그림
            this.setState(nextState);
            onEditing(this.state);
            console.log(this.state);
        }
    }); 
}
