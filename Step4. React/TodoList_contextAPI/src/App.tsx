import { Form, Header, TodoList, Wrapper } from "./components";
import ArrowLeft from "./components/Icon/ArrowLeft";
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
        <ArrowLeft />
      </TodoProvider>
    </>
  );
};

export default App;
