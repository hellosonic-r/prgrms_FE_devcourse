import TodoList from './TodoList.js'
import TodoCommets from './TodoComments.js'
import { request } from './api.js'


export default function App({$app}){

    this.state = {
        todos : [],
        selectedTodo : null,
        comments : []
    }

    this.setState = nextState => {
        this.state = nextState;
        todoList.setState(this.state.todos);
    }
    const todoList = new TodoList({ $target: $app, initialState : this.state}) 


    const todoComments = new TodoCommets({ 
        $target : $app, 
        initialState : {
            selectedTodo : {
                text: 'Learn JavaScript'
            },

            comments : [
                {
                    text : '안녕하세요'
                },
                {
                    text : '반가워요'
                }
            ]
        }
    })

    this.init = () => {
        request('https://kdt.roto.code/todos', (todos) => {this.steState({
            ...this.state, todos
        })})
    }
    this.init();
}