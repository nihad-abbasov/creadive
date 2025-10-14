import api, { createApiInstance } from '../lib/api';

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  status: 'new';
}

export const contactApi = {
  // Create new contact (for contact form submissions) - POST
  create: (data: Omit<ContactFormData, 'status'>, locale?: string) => {
    const payload: ContactFormData = {
      ...data,
      status: 'new'
    };
    const apiInstance = locale ? createApiInstance(locale) : api;
    return apiInstance.post('/contacts/', payload);
  },

  // Get all contacts
  // getAll: (locale?: string) => {
  //   const apiInstance = locale ? createApiInstance(locale) : api;
  //   return apiInstance.get('/contact/');
  // },

  // Get contact by ID
  // getById: (id: string | number, locale?: string) => {
  //   const apiInstance = locale ? createApiInstance(locale) : api;
  //   return apiInstance.get(`/contact/${id}/`);
  // },

  // Update contact (if needed for admin)
  // update: (id: string | number, data: any, locale?: string) => {
  //   const apiInstance = locale ? createApiInstance(locale) : api;
  //   return apiInstance.put(`/contact/${id}/`, data);
  // },

  // Delete contact (if needed for admin)
  // delete: (id: string | number, locale?: string) => {
  //   const apiInstance = locale ? createApiInstance(locale) : api;
  //   return apiInstance.delete(`/contact/${id}/`);
  // },
};
