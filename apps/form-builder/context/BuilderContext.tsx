"use client";

import { createContext, useContext, useState } from "react";

interface BuilderContextType {
  layouts: Layout[];
  setLayouts: React.Dispatch<React.SetStateAction<Layout[]>>;
  selectedComponent: string | null;
  setSelectedComponent: React.Dispatch<React.SetStateAction<string | null>>;
}

export const BuilderContext = createContext<BuilderContextType | undefined>(
  undefined,
);

export const useBuilder = () => {
  const context = useContext(BuilderContext);

  if (!context) {
    throw new Error("useBuilder must be used within a BuilderContext");
  }

  return context;
};

export const BuilderProvider: React.FC<{
  children: any;
}> = ({ children }) => {
  const [layouts, setLayouts] = useState<Layout[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null,
  );

  return (
    <BuilderContext.Provider
      value={{ layouts, setLayouts, selectedComponent, setSelectedComponent }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
