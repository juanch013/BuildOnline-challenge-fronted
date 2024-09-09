import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import type { AppDispatch } from '../../../store';
import InputField from '@/components/inputField';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
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
                  className='placeholder-margin'
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
                  className='placeholder-margin'
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex mt-16 w-full max-w-64 mx-auto justify-center rounded-full bg-green_bo px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
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