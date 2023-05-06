import { useDispatch } from 'react-redux';
import { register } from '../../redux/authorization/authorizationOperations';
import style from './RegistrationForm.module.css';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={style.reg__form}onSubmit={handleSubmit} autoComplete="off">
      <label className={style.reg__label}>
        Username
        <input type="text" name="name" />
      </label>
      <label className={style.reg__label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={style.reg__label}>
        Password
        <input type="password" name="password" />
      </label>
      <button className={style.reg__button} type="submit">Register</button>
    </form>
  );
};