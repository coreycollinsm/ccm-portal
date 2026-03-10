const DEFAULT_API_ENDPOINT = "https://api.coreycollinsm.com";
const LOCALHOST_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

const normalizeBaseURL = (url: string) => url.replace(/\/+$/, "");

const normalizeRoute = (route: string) => {
  if (!route) return "";
  return route.startsWith("/") ? route : `/${route}`;
};

export const getEndpointURL = (route = "") => {
  const configuredEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT?.trim();
  const baseURL = configuredEndpoint || DEFAULT_API_ENDPOINT;
  const resolvedBaseURL = resolveClientBaseURL(baseURL);

  return `${normalizeBaseURL(resolvedBaseURL)}${normalizeRoute(route)}`;
};

const resolveClientBaseURL = (baseURL: string) => {
  if (typeof window === "undefined") {
    return baseURL;
  }

  try {
    const parsedURL = new URL(baseURL);

    if (LOCALHOST_HOSTS.has(parsedURL.hostname)) {
      parsedURL.hostname = window.location.hostname;
    }

    return parsedURL.toString();
  } catch {
    return baseURL;
  }
};
