import api, { createApiInstance } from "../lib/api";

export const servicesApi = {
  // Get all services
  getAll: (locale?: string) => {
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.get("/services");
  },

  // Get service by ID
  // getById: (id: string | number, locale?: string) => {
  //   const apiInstance = locale ? createApiInstance(locale) : api;
  //   return apiInstance.get(`/services/${id}`);
  // },

  // Create new service (if needed for admin)
  // create: (data: any, locale?: string) => {
  //   const apiInstance = locale ? createApiInstance(locale) : api;
  //   return apiInstance.post('/services', data);
  // },

  // Update service (if needed for admin)
  // update: (id: string | number, data: any, locale?: string) => {
  //   const apiInstance = locale ? createApiInstance(locale) : api;
  //   return apiInstance.put(`/services/${id}`, data);
  // },

  // Delete service (if needed for admin)
  // delete: (id: string | number, locale?: string) => {
  //   const apiInstance = locale ? createApiInstance(locale) : api;
  //   return apiInstance.delete(`/services/${id}`);
  // },
};
