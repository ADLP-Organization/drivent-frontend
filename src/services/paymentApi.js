import api from './api';

export async function getPaymentByTicketId(token, ticketId) {
  const response = await api.get(`/payments?ticketId=${ticketId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
