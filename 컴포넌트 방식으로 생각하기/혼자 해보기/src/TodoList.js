function TodoList( {$target, initialState} ) {

    if (!new.target) {
        throw new Error(`'new' 키워드를 사용해서 ${TodoList.name} 컴포넌트를 생성해주세요.`)
    }
    const $todoList = document.createElement('div');
    $target.appendChild($todoList);

    this.state = initialState;

    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }


    this.render = () => {
        $todoList.innerHTML = `
            <ul>
                ${this.state.map(({text}) => `<li>${text}</li>`).join('')}
            </ul>
        `
        console.log($todoList);
        // DeleteButton({$del});

    }

    this.render();
}