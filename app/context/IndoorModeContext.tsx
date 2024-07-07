// context/IndoorModeContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface IndoorModeContextProps {
  isIndoorMode: boolean;
  setIsIndoorMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const IndoorModeContext = createContext<IndoorModeContextProps | undefined>(undefined);

export const IndoorModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isIndoorMode, setIsIndoorMode] = useState(false);

  useEffect(() => {
    if (isIndoorMode) {
      document.body.classList.add('indoor-mode');
    } else {
      document.body.classList.remove('indoor-mode');
    }
  }, [isIndoorMode]);

  return (
    <IndoorModeContext.Provider value={{ isIndoorMode, setIsIndoorMode }}>
      {children}
    </IndoorModeContext.Provider>
  );
};

export const useIndoorMode = () => {
  const context = useContext(IndoorModeContext);
  if (!context) {
    throw new Error('useIndoorMode must be used within an IndoorModeProvider');
  }
  return context;
};