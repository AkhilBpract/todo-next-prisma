"use client";
import { createContext, useContext, useState } from "react";

// Create the context with a default value that matches the type
const AuthContext = createContext<any>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState("Hi");
  return (
    <AuthContext.Provider value={{ name, setName }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
