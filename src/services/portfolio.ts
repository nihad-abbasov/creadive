import api, { createApiInstance } from "../lib/api";

export const portfolioApi = {
  // Get all portfolio items
  getAll: (locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get("/portfolio");
  },

  // Get portfolio item by ID
  getById: (id: string | number, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get(`/portfolio/${id}`);
  },

  // Get all portfolio categories
  getCategories: (locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get("/portfolio/categories");
  },

  // Get portfolio items by category
  getByCategory: (category: string, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get(`/portfolio/category/${category}`);
  },

  // Create new portfolio item (if needed for admin)
  create: (data: unknown, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.post("/portfolio", data);
  },

  // Update portfolio item (if needed for admin)
  update: (id: string | number, data: unknown, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.put(`/portfolio/${id}`, data);
  },

  // Delete portfolio item (if needed for admin)
  delete: (id: string | number, locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.delete(`/portfolio/${id}`);
  },
};
