import api, { createApiInstance } from "../lib/api";

export interface FAQQueryParams {
  ordering?: string;
  search?: string;
}

export interface FAQ {
  id: number;
  Question: string;
  Answer: string;
}

export interface FAQResponse {
  results?: FAQ[];
  count?: number;
  next?: string | null;
  previous?: string | null;
}

// Support both paginated response (with results) and direct array response
export type FAQApiResponse = FAQResponse | FAQ[];

export const faqApi = {
  // Get all FAQs with optional query parameters
  getAll: (params?: FAQQueryParams, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get<FAQApiResponse>("/faqs/", { params });
  },
};
