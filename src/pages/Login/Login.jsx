import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthorizationForm } from '../../components/AuthorizationForm/AuthorizationForm';

export default function Login() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <AuthorizationForm />
    </HelmetProvider>
  );
}