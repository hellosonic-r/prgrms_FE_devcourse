function TodoForm( {$target, onSubmit} ){

    if (!new.target) {
        throw new Error(`'new' 키워드를 사용해서 ${TodoForm.name} 컴포넌트를 생성해주세요.`)
    }
    const $form = document.createElement('form');

    $target.appendChild($form);


    let isInit = false;

    this.render = () => {
        $form.innerHTML = `
            <input type="text" name="todo" />
            <button>추가</button>
        `
        if (!isInit) {
            $form.addEventListener('submit', e => {
                e.preventDefault()
    
                const $todo = $form.querySelector('input[name=todo');
                const text = $todo.value;
                
                if (text.length > 1) {
                    $todo.value = '';
                    onSubmit(text);
                    addDeleteButton();
                } else {
                    alert('두 글자 이상을 입력해주세요.')
                    $todo.value = '';
                }

            })

            isInit = true;
        }
        
    }

    this.render();
}
