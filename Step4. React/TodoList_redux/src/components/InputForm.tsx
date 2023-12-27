import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add_todo } from '../actions/actions';

const InputForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleClick = (e) => {
    const todo = {
      title: text,
      isComplete: false,
    };

    dispatch(add_todo(todo));
    setText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="할 일을 입력하세요."
        onChange={handleChange}
        value={text}
        onKeyDown={handleKeyPress}
      ></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default InputForm;
