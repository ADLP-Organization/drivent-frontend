import styled from 'styled-components';
import { useState, useEffect } from 'react';
import BoxHotels from '../../../components/Hotels/BoxHotels';
import BoxRooms from '../../../components/Hotels/BoxRooms';
import Booking from '../../../components/Hotels/Booking';
import { getTicket } from '../../../services/ticketApi';
import useToken from '../../../hooks/useToken';

export default function Hotel() {
  const [hotelId, setHotelId] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('available'); //options: available, selected, reserved, unpaid, unavailable
  const [hotels, setHotels] = useState([]);
  const token =  useToken();

  useEffect( async() => {
    const ticket = await getTicket( token );

    if (!ticket.includesHotel) {
      setBookingStatus('unavailable');
    }
    if (!ticket.includesHotel && (ticket.status === 'PAID')) {
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
  console.log(bookingStatus);
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
         />
       </>
      }
      {bookingStatus === 'selected' &&
       <>
         <Subtitle>Primeiro, escolha seu hotel:</Subtitle>
         <BoxHotels
           setBookingStatus={setBookingStatus}
           setHotelId={setHotelId}
         />
         <Subtitle>Ótima pedida! Agora escolha o seu quarto:</Subtitle>
         <BoxRooms
           setBookingStatus={setBookingStatus}
         />
       </>        
      }
      {bookingStatus === 'reserved' &&
        <>
          <Subtitle>Você já escolheu o seu quarto:</Subtitle>
          <Booking
            hotels = {hotels}
          />
        </>
      }
    </>
  );
};

const Title = styled.div`
height: 40px;
font-family: 'Roboto', sans-serif;
font-size: 34px;
font-weight: 400;
line-height: 40px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 25px;
`;

const Subtitle = styled.div`
height: 23px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
text-align: left;
color: #8E8E8E;
margin-bottom: 20px;
`;

const Loading = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 50vh;
  img {
    height: 170px;
  }
`;
