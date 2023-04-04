import { createContext, useState } from 'react';

export const LoginData = createContext(null);

export default function LoginContext({ children }) {
  const [info, setInfo] = useState();

  return (
    <LoginData.Provider value={{ info, setInfo }}>
      {children}
    </LoginData.Provider>
  );
}
