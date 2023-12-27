import React from 'react';
import { useDispatch } from 'react-redux';
import { delete_todo } from '../actions/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const { id, title, isComplete } = todo;

  const handleDelete = () => {
    dispatch(delete_todo(id));
  };
  return (
    <li>
      {title}
      <button onClick={handleDelete}>X</button>
    </li>
  );
};

export default TodoItem;
