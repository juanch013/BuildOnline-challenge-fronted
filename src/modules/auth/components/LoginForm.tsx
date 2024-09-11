import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import type { AppDispatch } from '../../../store';
import InputField from '@/components/inputField';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const resultAction = await dispatch(login({ username, password }));

    if(login.fulfilled.match(resultAction)){
      router.push('/contactList');
    }
  };

  return (
      <div className="flex flex-col min-h-full w-full flex-1 justify-start px-6 py-12 lg:px-8 bg-black pt-72">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-4xl font-bold tracking-tight text-white red-hat-font">
              Welcome
            </h2>
          </div>

          <div className="mt-16 sm:mx-auto sm:w-full sm:max-w-3xl">
            <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-6 w-full">
              <div>
                <div className="mt-2">
                  <InputField
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="Email"
                  onChange={(e) => setUsername(e.target.value)}
                  className='h-12'
                  />
                </div>
              </div>

              <div>
                <div className="mt-2">
                <InputField
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                  className='h-12'
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="text-black font-sans font-medium text-lg w-64 h-14 flex mt-16 w-full max-w-64 mx-auto justify-center items-center rounded-full bg-green_bo px-3 py-1.5 text-sm font-semibold leading-6"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
      </div>
  );
};

export default LoginForm;

{/* <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
      <div className="mb-4">
        <label>Username</label>
        <input
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </form> */}