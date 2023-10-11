const $app = document.querySelector('#app');
const $foot = document.querySelector('#foot');

new Header({$target: $app});

const initialState = JSON.parse(window.localStorage.getItem('text')) ?? [];
const listCnt = getCount();

console.log(listCnt);

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
        
        // window.localStorage.setItem('text', JSON.stringify(nextState));
        console.log(nextState);
        // todoCount.setState(nextState)
    },
    
    checkTotalCountAtInsert : () => {
        const newCnt = getCount();
        todoCount.setState(newCnt);
    }
});

const todolist = new TodoList( {$target : $app, initialState, 
    checkTotalCountAtDelete : () => {
        const newCnt = getCount()
        todoCount.setState(newCnt);
        
    }, 
    checkedCnt : () => {
        todoCount.newState();

    }
});


const todoCount = new TodoCount( {$target : $foot, listCnt});