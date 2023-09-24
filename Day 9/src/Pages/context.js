import { createContext, useContext, useState } from 'react';

const LightContext = createContext();

export function LightProvider({ children }) {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <LightContext.Provider value={{ isLightOn, setIsLightOn }}>
      {children}
    </LightContext.Provider>
  );
}

export function useLight() {
  return useContext(LightContext);
}
