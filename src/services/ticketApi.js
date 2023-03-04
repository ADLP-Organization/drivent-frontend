import api from './api';

export async function ticketAPI(body, token) {
  const response = await api.post('/tickets', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
