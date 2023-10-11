function TodoForm( {$target, onSubmit, checkTotalCountAtInsert}) {
    const $form = document.createElement('form');

    $target.appendChild($form);


    $form.addEventListener('submit', e => {
        e.preventDefault();

        const $todo = $form.querySelector('input[name=todo]');
        const text = $todo.value;

        if (text.length > 1) {
            $todo.value = '';
            // window.localStorage.setItem('text', JSON.stringify([...this.state, {text, isCompleted: false}]))
            // this.nextState([...this.state, {text, isCompleted:false}])
            // window.localStorage.setItem('text', JSON.stringify([...this.state, {text, isCompleted: false}]));
            // this.state = JSON.parse(window.localStorage.getItem('text'));
            onSubmit(text);
            checkTotalCountAtInsert();


        } else {
            alert('두 글자 이상을 입력해주세요.');
            $todo.value = '';
        }
    })

    this.render = () => {
        $form.innerHTML = `
            <input type="text" name="todo" />
            <button>Add</button> 
        `
        
    }
    this.render();
}