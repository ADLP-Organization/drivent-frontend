import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import { getHotelsList } from '../../services/hotelApi';
import CardHotel from './CardHotel';
import { AllHotels, Subtitle } from '../Hotels';
import BoxRooms from './BoxRooms';
import { getTicket } from '../../services/ticketApi';

export default function BoxHotels({ setBookingStatus, hotels, setHotelId, setHotels, setRoomData, isChange }) {
  const token = useToken();
  const [isClicked, setIsClicked] = useState(null);
  const [capacity, setCapacity] = useState([]);
  const [roomTypes, setRoomTypes] = useState([]); 
  let result;

  function tipos() {
    const quartos = (result.roomTypes.filter(hotel => hotel.hotelId === 1));
    let tiposQuartos = '';
    if (quartos.some(quarto => quarto.capacity === 1)) tiposQuartos += 'Single';
    if (quartos.some(quarto => quarto.capacity === 2)) tiposQuartos += ', Double';
    if (quartos.some(quarto => quarto.capacity === 3)) tiposQuartos += ', Triple';

    return tiposQuartos;
  }

  function ocupados() {
    let ocupacao = 0;
    const quartos  = result.hotelsList.filter(hotel => hotel.id === 1).map((quarto) => { return quarto.Rooms;} )[0];
    quartos.map((quarto) => ocupacao +=(quarto.Booking.length));

    return ocupacao;
  }

  useEffect(() => {
    async function HotelsList() {
      try {
        const checkTicket = await getTicket(token);
        console.log(checkTicket);
        //if - não pago
        result = await getHotelsList(token);
        setHotels(result.hotelsList);
        setCapacity(result.capacity);
        setRoomTypes(result.roomTypes);
        //setBookingData(hotelId)

        const capacidade = ((result.capacity.filter(hotel => hotel.hotelId === 1))[0]._sum.capacity);
        const tipo = tipos();
        const ocupado = ocupados(); 
  
        setBookingStatus('available');
        console.log(result);
      } catch (err) {
        toast('Ops! Algo deu errado.');
        console.log(err.message);
      }
    }
    HotelsList();
  }, []);

  return (
    <>
      <AllHotels>
        {hotels !== null && 
        hotels.map((h) =>
          <CardHotel 
            key={h.id}
            id={h.id}
            image={h.image}
            name={h.name}
            setHotelId={setHotelId}
            setIsClicked= {setIsClicked}
            isClicked = {isClicked}
          />
        )}
      </AllHotels>
      {isClicked?
        <>  
          <Subtitle>Ótima pedida! Agora escolha o seu quarto:</Subtitle>
          <BoxRooms
            setBookingStatus={setBookingStatus}
            setRoomData = {setRoomData}
            hotelId = {isClicked}
          /> 
        </>:
        null}
      {isChange?
        <>  
          <Subtitle>Ótima pedida! Agora escolha o seu quarto:</Subtitle>
          <BoxRooms
            setBookingStatus={setBookingStatus}
            setRoomData = {setRoomData}
            hotelId = {isClicked}
          /> 
        </>:
        null}
    </>
  );
};
