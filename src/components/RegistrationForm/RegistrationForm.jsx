import { useDispatch } from 'react-redux';
// import { registerThunk } from '../../redux/authorization/api';
import { register } from '../../redux/auth/operations';
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
  };

  return (

    <div className={style.login__box} >
      <h2>Registration</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={style.user__box}>
            <input className={style.input} type="text" name="name"/>
            <label>Username</label>
          </div>
          <div className={style.user__box}>
            <input className={style.input} type="email" name="email"/>
            <label>Email</label>
          </div>
          <div className={style.user__box}>
            <input className={style.input} type="password" name="password"/>
            <label>Password</label>
          </div>
          <button className={style.button}type="submit">           
              <span></span>
              <span></span> 
              <span></span> 
              <span></span>            
          Register</button>
        </form>
    </div>
  );
};