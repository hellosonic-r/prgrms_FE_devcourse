import { ADD, DELETE, ITodo } from '../actions/actions';
const initalState = {
  todos: [],
};

type ActionType = typeof ADD | typeof DELETE;

interface Action {
  type: ActionType;
  todo?: ITodo;
  id?: number;
}

export const reducer = (state = initalState, action: Action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, action.todo],
      };
    case DELETE:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};
