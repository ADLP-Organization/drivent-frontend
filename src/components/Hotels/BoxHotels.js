import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import { getHotelsList } from '../../services/hotelApi';
import CardHotel from './CardHotel';
import { AllHotels, Subtitle } from '../Hotels';
import BoxRooms from './BoxRooms';

export default function BoxHotels({ setBookingStatus, hotels, setHotelId, setHotels, setRoomData, isChange }) {
  const token = useToken();
  const [isClicked, setIsClicked] = useState(null);
  const [roomTypes, setRoomTypes] = useState(null);
  const [capacity, setCapacity] = useState(null);

  useEffect(() => {
    async function HotelsList() {
      try {
        const result = await getHotelsList(token);
        setHotels(result.hotelsList);
        setRoomTypes(result.roomTypes);
        setCapacity(result.capacity);
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
        {(hotels !== null && roomTypes !== null && capacity !== null) && 
        hotels.map((h) =>
          <CardHotel 
            key={h.id}
            id={h.id}
            image={h.image}
            name={h.name}
            setHotelId={setHotelId}
            setIsClicked= {setIsClicked}
            isClicked = {isClicked}
            roomTypes = {roomTypes}
            capacity = {capacity}
            hotels = {hotels}
          />
        )}
      </AllHotels>
      {isClicked?
        <>  
          <Subtitle>Ótima pedida! Agora escolha o seu quarto:</Subtitle>
          <BoxRooms
            setBookingStatus={setBookingStatus}
            setRoomData = {setRoomData}
          /> 
        </>:
        null}
      {isChange?
        <>  
          <Subtitle>Ótima pedida! Agora escolha o seu quarto:</Subtitle>
          <BoxRooms
            setBookingStatus={setBookingStatus}
            setRoomData = {setRoomData}
          /> 
        </>:
        null}
    </>
  );
};
