import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoProvider";

interface ITodoProps {
  id: string;
  content: string;
}

const Todo = ({ id, content }: ITodoProps) => {
  const { deleteTodo } = useContext(TodoContext);

  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <li>
      {content}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default Todo;
