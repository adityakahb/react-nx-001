import { createContext, useState } from 'react';

export const NavigationData = createContext(null);

export default function NavigationContext({ children }) {
  const [isOpen, setIsOpen] = useState();

  return (
    <NavigationData.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavigationData.Provider>
  );
}
