import api from '../api';

export const CreateUser = async (dto) => {
  return await api.post(`${this.urlIMariaAuth}/users`, dto);
};

export const EditUser = async (flag, dto) => {
  return await api.put(`${this.urlIMariaAuth}/users/${flag}`, dto);
};