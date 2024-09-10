import LoginForm from '../components/LoginForm';
import Example from '@/components/header';

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Example/>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
