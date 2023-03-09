import api from './api';

export async function processPayment(userToken, body) {
  const response = await api.post('payments/process', body, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  return response.data;  
}
