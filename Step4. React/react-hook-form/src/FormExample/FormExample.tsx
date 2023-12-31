import React from 'react';
import { useForm } from 'react-hook-form';

const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(() => console.log('제출'))}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="email"
        placeholder="test@email.com"
        {...register('email', {
          required: '필수 입력값입니다.',
          minLength: {
            message: '10자 이상',
            value: 10,
          },
        })}
      />
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="********"
        {...register('password')}
      />

      <button type="submit">로그인</button>
      <span>{errors.email?.message}</span>
    </form>
  );
};

export default FormExample;
