import { getEndpointURL } from "../api/getEndpointURL";

export interface CreatePageViewPayload {
  sessionId: string;
  currentPage: string;
  prevPage: string;
  timestamp: string;
}

const API_URL = getEndpointURL("/tracking/page-views");

export const postPageView = async (
  payload: CreatePageViewPayload,
): Promise<void> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Failed to record page view: ${response.status}`);
  }
};
