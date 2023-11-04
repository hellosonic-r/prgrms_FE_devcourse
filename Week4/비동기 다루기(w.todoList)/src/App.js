import TodoList from "./TodoList.js"
import TodoComments from "./TodoComments.js"
import { request } from "./api.js" 

export default function App({$app}) {
    this.state = {
        todos : [],
        selectedTodo : null,
        comments : [],
    }
    
    this.onlyTodoListSetState = nextState => {
        this.state = nextState;
        todoList.setState(this.state.todos);
    }

    this.setState = nextState => {
        this.state = nextState;
        console.log(nextState);
        // todoList.setState(this.state.todos);
        todoComments.setState({
            selectedTodo : this.state.selectedTodo,
            comments : this.state.comments,
        })
    }
    
    const todoList = new TodoList( {
        $target : $app,
        initialState : this.state.todos,
        onClick : async (id) => {
            const selectedTodo = this.state.todos.find(todo => todo.id === id);
            this.setState( {...this.state,selectedTodo});
            
            try {
                // 로딩중 보여주는 처리
                const data = await request(`https://kdt-frontend.programmers.co.kr/comments?todo.id=${id}`) 
                this.setState( {...this.state, comments : data} )
            } catch (e) {
                console.log(e);

            } finally {
                // 로딩중 숨겨주는 처리
            }
        }
    })
    

    
    const todoComments = new TodoComments( {
        $target : $app,
        initialState : {
            selectedTodo : this.state.selectedTodo,
            comments : this.state.comments,
        }
    })
    
    this.init = async () => {
        const data = await request('https://kdt-frontend.programmers.co.kr/todos')
        
        this.onlyTodoListSetState({
            ...this.state,
            todos : data,
        })
        
    }

    this.init();
}
