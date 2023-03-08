import api from './api';

export async function processPayment(userToken, body) {
  //   const body = {
  //     ticketId: 41,
  //     cardData: {
  //       issuer: data.issuer,
  //       number: data.number,
  //       name: data.name,
  //       cvv: data.cvc
  //     }
  //   };

  const response = await api.post('/payment/process', body, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });
  console.log(response);
  return response.data;  
}
