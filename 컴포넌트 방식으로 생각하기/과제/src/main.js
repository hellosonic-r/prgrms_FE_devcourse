const $app = document.querySelector('#app');

new Header({$target: $app});

const initialState = JSON.parse(window.localStorage.getItem('text')) ?? [];

// const arr = [];
const todoform = new TodoForm({
    $target: $app,

    onSubmit : (text) => {
        const nextState = [...todolist.state, {text, isCompleted: false}];
        // nextState.map((element, idx) => {
        //     return element['index'] = idx; 
        // })
        // console.log(nextState);
        todolist.setState(nextState);
        window.localStorage.setItem('text', JSON.stringify(nextState));
    }
});

const todolist = new TodoList( {$target : $app, initialState,

} );  