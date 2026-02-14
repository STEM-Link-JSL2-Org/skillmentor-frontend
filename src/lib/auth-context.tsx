import { createContext, useContext, useState, useEffect } from "react";
import { MOCK_USER } from "./mockData";
import { storage } from "./storage";
import type { User } from "@/types";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Load user data from localStorage on initial mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock authentication
    if (email === MOCK_USER.email && password === "password123") {
      const enrolledCourses = storage.getEnrolledCourses();
      const currentUser = { ...MOCK_USER, enrolledCourses };
      setUser(currentUser);
      setIsAuthenticated(true);
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("user");
    // Don't clear enrolled courses on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
