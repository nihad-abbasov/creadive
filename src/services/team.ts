import api, { createApiInstance } from '../lib/api';

export const teamApi = {
    // Get all team members
    getAll: (locale?: string) => {
        const apiInstance = locale ? createApiInstance(locale) : api;
        return apiInstance.get('/team');
    },

    // Get team member by ID
    getById: (id: string | number, locale?: string) => {
        const apiInstance = locale ? createApiInstance(locale) : api;
        return apiInstance.get(`/team/${id}`);
    },

    // Create new team member (if needed for admin)
    create: (data: any, locale?: string) => {
        const apiInstance = locale ? createApiInstance(locale) : api;
        return apiInstance.post('/team', data);
    },

    // Update team member (if needed for admin)
    update: (id: string | number, data: any, locale?: string) => {
        const apiInstance = locale ? createApiInstance(locale) : api;
        return apiInstance.put(`/team/${id}`, data);
    },

    // Delete team member (if needed for admin)
    delete: (id: string | number, locale?: string) => {
        const apiInstance = locale ? createApiInstance(locale) : api;
        return apiInstance.delete(`/team/${id}`);
    },
};
