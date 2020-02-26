import api from '../api';

export const ListServices = async () => {
  return await api.get('/services');
};

export const AvailableTimeslist = async (date, serviceId) => {
  return await api.get(`/services/${date}/schedule/${serviceId}`);
};

export const ScheduleTime = async (userId, dto) => {
  return await api.post(`/services/${userId}/schedule`, dto);
};