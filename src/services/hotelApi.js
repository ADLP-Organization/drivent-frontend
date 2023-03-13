import api from './api';

export async function getHotelsList(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export async function getBookingList( token, ) {
  try{
    const response = await api.get('/booking', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }catch(e) {
    if(e.name === 'Not Found') {
      return [];
    }
  }
}

export async function upsertBooking(token, booking, bookingId) {
  const response = await api.put(`booking/${bookingId}`, booking, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postBooking( token, booking) {
  const response = await api.post('/booking', booking, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export async function getRoomsByHotel(token, hotelId) {
  const response = await api.get(`/hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
