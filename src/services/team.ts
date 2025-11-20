import api, { createApiInstance } from "../lib/api";

export interface TeamQueryParams {
  ordering?: string;
  search?: string;
}

export interface TeamMember {
  id: number;
  Name: string;
  Role: string;
  Image: string;
  Bio: string;
}

export interface TeamResponse {
  results?: TeamMember[];
  count?: number;
  next?: string | null;
  previous?: string | null;
}

// Support both paginated response (with results) and direct array response
export type TeamApiResponse = TeamResponse | TeamMember[];

export const teamApi = {
  // Get all team members with optional query parameters
  getAll: (params?: TeamQueryParams, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get<TeamApiResponse>("/team/", { params });
  },

  // Get team member by ID
  getById: (id: string | number, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get(`/team/${id}/`);
  },

  // Create new team member (if needed for admin)
  create: (data: unknown, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.post("/team/", data);
  },

  // Update team member (if needed for admin)
  update: (id: string | number, data: unknown, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.put(`/team/${id}/`, data);
  },

  // Delete team member (if needed for admin)
  delete: (id: string | number, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.delete(`/team/${id}/`);
  },
};
