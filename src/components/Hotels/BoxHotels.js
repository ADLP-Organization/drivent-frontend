import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import { getHotelsList } from '../../services/hotelApi';
import { getTicketsByUserId } from '../../services/ticketApi';

export default function BoxHotels({ setBookingStatus, setBookingData }) {
  const token = useToken();
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    async function HotelsList() {
      try {
        const checkTicket = await getTicketsByUserId(token);
        //console.log(checkTicket);
        //if - não pago
        const result = await getHotelsList(token);
        setHotels(result);
        //setBookingData(hotelId)
        //console.log(result);
        setBookingStatus('available');
      } catch (err) {
        toast('Ops! Algo deu errado.');
        //console.log(err.message);
      }
    }
    HotelsList();
  }, []);

  return (
    'BoxHotels Em breve!'
  );
};
