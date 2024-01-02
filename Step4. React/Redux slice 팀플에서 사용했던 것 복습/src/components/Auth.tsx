import { useForm, FieldErrors, FieldValues } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';

const Auth = () => {
  const { register, handleSubmit } = useForm({ mode: 'onSubmit' });
  const dispatch = useDispatch();

  const onValid = (data: FieldValues) => {
    console.log(data);
    dispatch(authActions.login());
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input type="email" placeholder="email" {...register('email')} />
        <input
          type="password"
          placeholder="********"
          {...register('password')}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

export default Auth;
