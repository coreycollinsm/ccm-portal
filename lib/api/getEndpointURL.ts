const DEFAULT_API_ENDPOINT = "https://api.coreycollinsm.com";

const normalizeBaseURL = (url: string) => url.replace(/\/+$/, "");

const normalizeRoute = (route: string) => {
  if (!route) return "";
  return route.startsWith("/") ? route : `/${route}`;
};

export const getEndpointURL = (route = "") => {
  const configuredEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT?.trim();
  const baseURL = configuredEndpoint || DEFAULT_API_ENDPOINT;

  return `${normalizeBaseURL(baseURL)}${normalizeRoute(route)}`;
};
