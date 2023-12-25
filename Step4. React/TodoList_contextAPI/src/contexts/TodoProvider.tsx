import { createContext, useState } from "react";
import { v4 } from "uuid";

interface ITodoProps {
  id: string;
  content: string;
  isComplete: boolean;
}

interface IChildrenProps {
  children: React.ReactNode;
}

const TodoContext = createContext<{
  todos: ITodoProps[];
  addTodo: (content: string) => void;
  deleteTodo: (id: string) => void;
}>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

const TodoProvider = ({ children }: IChildrenProps) => {
  const [todos, setTodos] = useState<ITodoProps[]>([]);

  const addTodo = (content: string) => {
    setTodos([
      ...todos,
      {
        id: v4(),
        content,
        isComplete: false,
      },
    ]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
