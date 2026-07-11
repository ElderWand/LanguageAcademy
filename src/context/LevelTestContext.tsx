"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface LevelTestContextType {
  isOpen: boolean;
  openTestModal: () => void;
  closeTestModal: () => void;
}

const LevelTestContext = createContext<LevelTestContextType | undefined>(undefined);

export function LevelTestProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openTestModal = () => setIsOpen(true);
  const closeTestModal = () => setIsOpen(false);

  return (
    <LevelTestContext.Provider value={{ isOpen, openTestModal, closeTestModal }}>
      {children}
    </LevelTestContext.Provider>
  );
}

export function useLevelTest() {
  const context = useContext(LevelTestContext);
  if (!context) {
    throw new Error("useLevelTest must be used within a LevelTestProvider");
  }
  return context;
}
