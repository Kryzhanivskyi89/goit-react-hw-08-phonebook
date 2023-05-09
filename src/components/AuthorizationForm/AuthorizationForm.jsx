import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/authorization/authorizationOperations';
import style from './AuthorizationForm.module.css';


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
  };

  return (
    // <form className={style.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={style.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={style.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Log In</button>
    // </form>

    <div className={style.login__box} >
      <h2>Login</h2>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={style.user__box}>
            <input className={style.input} type="email" name="email"/>
            <label>Email</label>
          </div>
          <div className={style.user__box}>
            <input className={style.input} type="password" name="password"/>
            <label>Password</label>
          </div>
          <button className={style.button} type="submit">           
              <span></span>
              <span></span> 
              <span></span> 
              <span></span>            
          Log In</button>
        </form>
    </div>
  );
};