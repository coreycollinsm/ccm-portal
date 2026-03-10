import { cookies } from "next/headers";
import { getEndpointURL } from "../api/getEndpointURL";

export type AuthSessionUser = {
  id: string;
  email: string;
  role: string;
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

export const getAuthSessionUser = async (): Promise<AuthSessionUser | null> => {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const response = await fetch(getEndpointURL("/auth/me"), {
      method: "GET",
      headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
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

export const validateAuthSession = async () => {
  const user = await getAuthSessionUser();

  return {
    isAuthenticated: Boolean(user),
    user,
  };
};
