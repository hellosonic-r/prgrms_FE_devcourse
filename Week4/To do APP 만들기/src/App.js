import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import Header from "./Header.js";
import { request } from "./api.js";
import UserList from "./UserList.js";

export default function App({$target}) {

    const $userListContainer = document.createElement('div');
    const $todoListContainer = document.createElement('div');

    $target.appendChild($userListContainer);
    $target.appendChild($todoListContainer);

    this.state = {
        userList : [],
        selectedUsername : null,
        todos : [],
        isTodoLoading : false,
    }

    const userList = new UserList({
        $target : $userListContainer,
        initialState : this.state.userList,
        onSelect : async (username) => {
            history.pushState(null, null, `/${username}`)
            this.setState({
                ...this.state,
                selectedUsername: username,
            })
            await await fetchTodos()
        }
    })

    const header = new Header( {
        $target : $todoListContainer,
        initialState : {
            selectedUsername : this.state.selectedUsername,
            isLoading : this.state.isTodoLoading,
        },
    })

    new TodoForm({
        $target : $todoListContainer,
        onSubmit: async (content) => {

            const isFirstTodoAdd = this.state.todos.length === 0;
            // 서버 올라가기 전에 미리 추가
            // api가 잘 동작할거야 -> 낙관적 업데이트
            const todo = {
                content,
                isCompleted: false,
            }
            this.setState({
                ...this.state,
                todos: [
                    this.state.todos,
                    todo,
                ]
            })

            await request(`/${this.state.selectedUsername}`, {
                method : 'POST',
                body : JSON.stringify({
                    content,
                    isCompleted : false,
                })
            })
            await fetchTodos();

            if (isFirstTodoAdd) {
                await fetchUserList();
            }
        }
    })

    this.setState = nextState => {
        this.state = nextState;
        header.setState({
            selectedUsername : this.state.selectedUsername,
            isLoading : this.state.isTodoLoading,
        })

        todolist.setState({
            todos : this.state.todos,
            isTodoLoading : this.state.isTodoLoading,
        })

        userList.setState(this.state.userList)
        this.render();
    }

    this.render = () => {
        const { selectedUsername } = this.state
        $todoListContainer.style.display = selectedUsername ? 'block' : 'none'
    }
    
    const todolist = new TodoList({
        $target : $todoListContainer,
        initialState: {
            todos : this.state.todos,
            isTodoLoading : this.state.isTodoLoading,
            selectedUsername : this.state.selectedUsername,
        },
        onToggle: async (id) => {
            //낙관적 업데이트 ( 서버 통신 전에 미리 갱신 )
            const todoIndex = this.state.todos.findIndex(todo => todo._id === id) 
            const nextTodos = [...this.state.todos]
            nextTodos[todoIndex].isCompleted = !nextTodos[todoIndex].isCompleted
            this.setState({
                ...this.state,
                todos : nextTodos,
            })

            await request(`/${this.state.selectedUsername}/${id}/toggle?delay=5000`, {
                method: 'PUT',
            })
            await fetchTodos();
        },
        onRemove: async (id) => {
            //낙관적 업데이트
            const todoIndex = this.state.todos.findIndex(todo => todo._id === id)
            const nextTodos = [...this.state.todos]
            nextTodos.splice(todoIndex, 1)
            this.setState({
                ...this.state,
                todos: nextTodos,
            })


            await request(`/${this.state.selectedUsername}/${id}`,{
                method: 'DELETE',
            })
            await fetchTodos();
        }
    })

    const fetchUserList = async () => {
        const userList = await request('/users');
        this.setState({
            ...this.state,
            userList,
        })

    }

    const fetchTodos = async () => {
        const { selectedUsername } = this.state;

        if (selectedUsername) {
            this.setState({
                ...this.state,
                isTodoLoading : true,
            })
            const todos = await request(`/${selectedUsername}`)
            this.setState({
                ...this.state,
                todos,
                isTodoLoading : false,
            })
            console.log(todos);
        }
    }
    
    const init = async () => {
        await fetchUserList()

        // url의 특정 사용자를 나타내는 값이 있을 경우
        const {pathname} = location
        
        if (pathname.length > 1) {
            this.setState({
                ...this.state,
                selectedUsername: pathname.substring(1)
            })
            await fetchTodos();
        }

    }
    
    this.render();
    init();
}
