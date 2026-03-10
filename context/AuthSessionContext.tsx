"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

type AuthSessionUser = {
  id: string;
  email: string;
  role: string;
};

type AuthSessionContextValue = {
  isAuthenticated: boolean;
  isLoading: boolean;
};

const AuthSessionContext = createContext<AuthSessionContextValue | null>(null);

const PRODUCTION_API_FALLBACK = "https://api.coreycollinsm.com";

const getApiEndpoint = () => {
  const configuredEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT?.trim();

  if (configuredEndpoint) {
    return configuredEndpoint.replace(/\/+$/, "");
  }

  if (process.env.NODE_ENV === "production") {
    return PRODUCTION_API_FALLBACK;
  }

  return null;
};

const isAuthSessionUser = (value: unknown): value is AuthSessionUser => {
  if (!value || typeof value !== "object") return false;

  const user = value as Record<string, unknown>;

  return (
    typeof user.id === "string" &&
    typeof user.email === "string" &&
    typeof user.role === "string"
  );
};

const getAuthSessionUser = async () => {
  const apiEndpoint = getApiEndpoint();
  if (!apiEndpoint) return null;

  try {
    const response = await fetch(`${apiEndpoint}/auth/me`, {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    if (!response.ok) return null;

    const responseBody: unknown = await response.json();

    if (isAuthSessionUser(responseBody)) {
      return responseBody;
    }

    if (
      responseBody &&
      typeof responseBody === "object" &&
      "data" in responseBody &&
      responseBody.data &&
      typeof responseBody.data === "object" &&
      "user" in responseBody.data &&
      isAuthSessionUser(responseBody.data.user)
    ) {
      return responseBody.data.user;
    }

    return null;
  } catch {
    return null;
  }
};

export const AuthSessionProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const user = await getAuthSessionUser();
      setIsAuthenticated(Boolean(user));
      setIsLoading(false);
    };

    void checkSession();
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated,
      isLoading,
    }),
    [isAuthenticated, isLoading],
  );

  return (
    <AuthSessionContext.Provider value={value}>
      {children}
    </AuthSessionContext.Provider>
  );
};

export const useAuthSession = () => {
  const context = useContext(AuthSessionContext);

  if (!context) {
    throw new Error("useAuthSession must be used within AuthSessionProvider");
  }

  return context;
};
