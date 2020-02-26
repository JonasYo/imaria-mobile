import api from '../api';

export const ListUserSchedule = async (userId) => {
  return await api.get(`${this.urlIMariaAuth}/schedule/user/${userId}`);
};

export const ListSchedules = async (date) => {
  return await api.get(`${this.urlIMariaAuth}/schedule/${date}/accredited`);
};

