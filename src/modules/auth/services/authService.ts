export const loginUser = async (email: string, password: string) => {
    // Aquí harías la llamada a la API
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Error en la autenticación');
    }
    return response.json();
  };
  