import LoginForm from '../components/LoginForm';
import Navbar from '@/components/navbar';

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <Navbar/>
      <LoginForm/>
    </div>
  );
};

export default LoginPage;
