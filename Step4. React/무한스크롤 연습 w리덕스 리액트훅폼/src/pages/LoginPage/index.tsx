import React, { useEffect } from 'react';
import { useForm, FieldValues, FieldErrors } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import { userActions } from '../../store/reducers/userReducer';
import { useNavigate } from 'react-router-dom';

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  display: flex;
  width: 70%;
  flex-direction: column;
`;
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInformation = useSelector((state: RootState) => state.user);
  // console.log(userInformation);
  useEffect(() => {
    console.log(userInformation);
  }, [userInformation]);

  const onValid = (data: FieldValues) => {
    // console.log('성공', data);
    dispatch(userActions.userSlice(data));
    navigate('/home');
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log('실패', errors);
  };
  return (
    <LoginPageWrapper>
      <StyledForm onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="email"
          placeholder="email@email.com"
          {...register('email', { required: '이메일을 입력해주세요' })}
        />
        <span>
          {errors.email?.message ? errors.email.message.toString() : ' .'}
        </span>
        <input
          type="password"
          placeholder="********"
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이 되어야합니다.',
            },
          })}
        />
        <span>
          {errors.password?.message
            ? errors.password.message.toString()
            : ' . '}
        </span>
        <button>Login</button>
      </StyledForm>
    </LoginPageWrapper>
  );
};

export default LoginPage;
