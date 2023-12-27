// 액션 타입 정의
export const ADD = 'ADD_TODO';
export const DELETE = 'DELETE_TODO';

let id: number = 0;

export interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

export const add_todo = (todo: ITodo) => {
  return {
    type: ADD,
    todo: {
      id: id++,
      title: todo.title,
      isComplete: todo.isComplete,
    },
  };
};

export const delete_todo = (id: number) => {
  return {
    type: DELETE,
    id,
  };
};
