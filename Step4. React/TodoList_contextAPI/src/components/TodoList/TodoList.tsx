import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoProvider";
import Todo from "./Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} id={todo.id} content={todo.content}></Todo>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
