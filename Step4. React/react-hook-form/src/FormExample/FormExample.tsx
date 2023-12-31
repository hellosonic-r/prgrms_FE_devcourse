import { useForm, FieldErrors, FieldValues } from 'react-hook-form';

const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data: FieldValues) => {
    console.log('타당합니다', data);
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <label htmlFor="email">이메일</label>
      <input
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
      <input type="password" placeholder="********" {...register('password')} />

      <button type="submit">로그인</button>
      <span>{errors.email?.message as string}</span>
    </form>
  );
};

export default FormExample;
