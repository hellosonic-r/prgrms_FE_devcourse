import { Form, Header, TodoList, Wrapper } from "./components";
import { TodoProvider } from "./contexts/TodoProvider";

const App = () => {
  return (
    <>
      <Header title="Todolist, ContextAPI"></Header>
      <TodoProvider>
        <Wrapper>
          <Form />
          <TodoList></TodoList>
        </Wrapper>
      </TodoProvider>
    </>
  );
};

export default App;
