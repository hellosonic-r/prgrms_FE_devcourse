import { request } from "./api.js";
import TodoList from "./TodoList.js";

const DUMMY_DATA = {
  title: "완료된 일들",
  todos: [{ content: "완료1", isCompleted: true }],
};
export default function App({ $target }) {
  this.state = { todos: [] };

  const incompletedTodoList = new TodoList({
    $target,
    initialState: DUMMY_DATA,
  });
  const completedTodoList = new TodoList({
    $target,
    initialState: DUMMY_DATA,
  });

  this.setState = (nextState) => {
    this.state = nextState;

    const { todos } = this.state;

    incompletedTodoList.setState({
      ...incompletedTodoList.state,
      todos: todos.filter((todo) => !todo.isCompleted),
    });

    completedTodoList.setState({
      ...completedTodoList.state,
      todos: todos.filter((todo) => todo.isCompleted),
    });
  };

  //   const fetchTodos = async () => {
  //     const todos = await request("");
  //     this.setState({
  //       ...this.state,
  //       todos,
  //     });
  //   };

  //   fetchTodos();
}
