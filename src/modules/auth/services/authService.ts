import dotenv from 'dotenv'
dotenv.config()

export const loginUser = async (email: string, password: string) => {

  const path = `${process.env.NEXT_PUBLIC_API_PATH}/auth/login`

  const response = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Error en la autenticación');
    }
    
    return response.json();
  };
  