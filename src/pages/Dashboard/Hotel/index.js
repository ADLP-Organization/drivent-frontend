import { useState, useEffect } from 'react';
import BoxHotels from '../../../components/Hotels/BoxHotels';
import Booking from '../../../components/Hotels/Booking';
import { getTicket } from '../../../services/ticketApi';
import useToken from '../../../hooks/useToken';
import { Subtitle, Title, Loading } from '../../../components/Hotels';

export default function Hotel() {
  const [hotelId, setHotelId] = useState();
  const [bookingStatus, setBookingStatus] = useState('available'); //options: available, selected, reserved, unpaid, unavailable
  const [hotels, setHotels] = useState([]);
  const [roomData, setRoomData] = useState({});
  const token =  useToken();

  useEffect( async() => {
    const ticket = await getTicket( token );
    if (!ticket.TicketType.includesHotel) {
      setBookingStatus('unavailable');
    }
    if (ticket.TicketType.includesHotel && (ticket.status === 'PAID')) {
      setBookingStatus('available'); 
    };
    if (ticket.status === 'RESERVED') {
      setBookingStatus('unpaid'); 
    }
  }, []);

  if (bookingStatus === null) {
    return (
      <>
        <Title>Escolha de hotel e quarto</Title>
        <Loading>
          <img src='https://cdn.pixabay.com/animation/2022/10/11/03/16/03-16-39-160_512.gif' alt={'Loading...'}></img>
        </Loading>
      </>
    );
  }

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      {bookingStatus === 'unpaid' &&
        <>
          <Subtitle>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem.</Subtitle>
        </>
      }
      {bookingStatus === 'unavailable' &&
        <>
          <Subtitle>Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades.</Subtitle>
        </>
      }
      {bookingStatus === 'available' &&
       <>
         <Subtitle>Primeiro, escolha seu hotel:</Subtitle>
         <BoxHotels
           setBookingStatus={setBookingStatus}
           setHotelId={setHotelId}
           hotels = {hotels}
           setHotels = {setHotels}
           setRoomData = {setRoomData}
         />
       </>
      }
      {bookingStatus === 'reserved' &&
        <>
          <Subtitle>Você já escolheu o seu quarto:</Subtitle>
          <Booking
            hotels = {hotels}
            roomData = {roomData}
          />
        </>
      }
    </>
  );
};
