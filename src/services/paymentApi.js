import api from './api';

export async function processPayment(userToken, data) {
  console.log(data);
  const body = {
    ticketId: 23,
    cardData: {
      issuer: data.issuer,
      number: data.number,
      name: data.name,
      cvv: data.cvc
    }
  };

  const response = await api.post('/payment/process', body, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  console.log(body);
  console.log(response);
}
