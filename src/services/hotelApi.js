import api from './api';

export async function getHotelsList(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export async function updateBooking( token, booking) {}

export async function postBooking( token, booking) {
  const response = await api.post('/booking', booking, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //console.log(response.data);
  return response.data;
};

export async function getRoomsByHotel(token, roomId) {
  const response = await api.get(`/hotels/${roomId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //console.log(response.data);
  return response.data;
};
