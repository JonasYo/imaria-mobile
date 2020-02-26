import api from '../api';

export const SignIn = async dto => {
  alert(dto)
  return await api.post('/auth/singin', dto);
};

export const SignInAlternative = async dto => {
  return await api.post('/auth/singin/alternative', dto);
};

export const ForgotPassword = async dto => {
  return await api.post('/auth/forgot', dto);
};

export const ResetPassword = async dto => {
  return await api.post('/auth/reset', dto);
};
