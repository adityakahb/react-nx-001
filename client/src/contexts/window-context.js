import { createContext, useState } from 'react';

export const WindowData = createContext(null);

export default function WindowContext({ children }) {
  const [info, setInfo] = useState();

  return (
    <WindowData.Provider value={{ info, setInfo }}>
      {children}
    </WindowData.Provider>
  );
}
