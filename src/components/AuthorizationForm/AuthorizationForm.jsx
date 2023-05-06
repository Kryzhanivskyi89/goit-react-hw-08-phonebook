import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authorization/authorizationOperations';
import { LogForm, LogLabel } from './LoginForm.styled';

export const AuthorizationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LogForm onSubmit={handleSubmit} autoComplete="off">
      <LogLabel>
        Email
        <input type="email" name="email" />
      </LogLabel>
      <LogLabel>
        Password
        <input type="password" name="password" />
      </LogLabel>
      <button type="submit">Log In</button>
    </LogForm>
  );
};