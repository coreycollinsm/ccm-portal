import { cookies } from "next/headers";

export type AuthSessionUser = {
  id: string;
  email: string;
  role: string;
};

const DEFAULT_BASE_API_URL = "https://api.coreycollinsm.com";
const API_PATH = "/tracking/page-views";

const API_URL = process.env.NEXT_PUBLIC_API_ENDPOINT
  ? `${process.env.NEXT_PUBLIC_API_ENDPOINT}${API_PATH}`
  : `${DEFAULT_BASE_API_URL}${API_PATH}`;

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
  const apiEndpoint = API_URL;
  if (!apiEndpoint) return null;

  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const response = await fetch(`${apiEndpoint}/auth/me`, {
      method: "GET",
      headers: cookieHeader ? { Cookie: cookieHeader } : undefined,
      cache: "no-store",
    });

    if (!response.ok) return null;

    const responseBody = await response.json();
    if (!isAuthSessionUser(responseBody)) return null;

    return responseBody;
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
