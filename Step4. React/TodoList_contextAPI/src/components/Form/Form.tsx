import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoProvider";

const Form = () => {
  const { addTodo } = useContext(TodoContext);
  const [content, setContent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
    console.log(content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={content}
        onChange={handleChange}
      />
      <button>add</button>
    </form>
  );
};

export default Form;
