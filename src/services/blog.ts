import api, { createApiInstance } from "../lib/api";

export interface BlogQueryParams {
  ordering?: string;
  search?: string;
  status?: "published" | "draft";
  tags?: string;
}

export const blogApi = {
  // Get all blog posts with optional query parameters
  getAll: (params?: BlogQueryParams, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get("/blog/", { params });
  },

  // Get blog post by ID
  getById: (id: string | number, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get(`/blog/${id}/`);
  },

  // Create new blog post (if needed for admin)
  create: (data: unknown, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.post("/blog", data);
  },

  // Update blog post (if needed for admin)
  update: (id: string | number, data: unknown, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.put(`/blog/${id}`, data);
  },

  // Delete blog post (if needed for admin)
  delete: (id: string | number, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.delete(`/blog/${id}`);
  },
};
