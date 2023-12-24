const data = [
    {
        text : 'JavaScript 공부하기'
    },
    {
        text : 'JavaScript 복습하기' 
    }
];

const $app = document.querySelector('.app');

new TodoForm( {
    $target : $app,
    onSubmit: (text) => {
        const nextState = [...todoList.state, { text }]
        todoList.setState(nextState);
    }
})


const todoList = new TodoList( {
    $target : $app,
    initialState : data,
})

// setTimeout(() => {
//     todoList.setState([
//         {
//             text : 'Hello JS!'
//         }
//     ])
// }, 5000)

const data1 = [
    {
        text: '축구 보기'
    },
    {
        text : '롤하기'
    },
    {
        text : '헬스하기'
    },
]

// new TodoList( {
//     $target : $app,
//     initialState : data1,
// })

// new TodoList( {
//     $target : $app,
//     initialState : [ { text : '음악듣기' }, { text : '영화보기'}]
// })
