import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div>
      <h1>Redux TodoList</h1>
      <InputForm />
      <TodoList />
    </div>
  );
};

export default App;
