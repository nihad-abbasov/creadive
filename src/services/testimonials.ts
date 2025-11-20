import api, { createApiInstance } from "../lib/api";

export interface TestimonialQueryParams {
  ordering?: string;
  search?: string;
}

export interface Testimonial {
  id: number;
  Name: string;
  Thoughts: string;
  Role: string;
  InstagramUrl: string;
}

export interface TestimonialResponse {
  results?: Testimonial[];
  count?: number;
  next?: string | null;
  previous?: string | null;
}

// Support both paginated response (with results) and direct array response
export type TestimonialApiResponse = TestimonialResponse | Testimonial[];

export const testimonialsApi = {
  // Get all testimonials with optional query parameters
  getAll: (params?: TestimonialQueryParams, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get<TestimonialApiResponse>("/testimonials/", {
      params,
    });
  },
};
