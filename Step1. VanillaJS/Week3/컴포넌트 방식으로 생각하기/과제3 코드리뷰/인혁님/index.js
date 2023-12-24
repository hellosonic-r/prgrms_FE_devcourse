class App {
    constructor ( {$target, initialState}) {
        this.$target = $target;
        this.initialState = initialState;

        this.init();
    }


    init() {
        new Header ( {
            $target : this.$target,
            title : 'Simple Todo List',
        })

        new TodoForm({
            $target : this.$target,
            addListCallback : (text) => {
                const nextState = [...todoList.state, {text, isCompleted : false}];
                todoList.setState(nextState);
            },
            addCountCallback : () => {
                const nextState = {...todoCount.state, total : todoCount.state.total + 1};
                todoCount.setState(nextState);
            }
        })

        const todoList = new TodoList({
            
        })
    }
}
