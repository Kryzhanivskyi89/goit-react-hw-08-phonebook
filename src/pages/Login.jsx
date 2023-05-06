import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from '../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </HelmetProvider>
  );
}