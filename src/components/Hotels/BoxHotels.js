import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import { getHotelsList } from '../../services/hotelApi';
import CardHotel from './CardHotel';
import { AllHotels, Subtitle } from '../Hotels';
import BoxRooms from './BoxRooms';

export default function BoxHotels({ setBookingStatus, hotels, setHotelId, setHotels, setRoomData, isChange }) {
  const [isClicked, setIsClicked] = useState(null);
  const token = useToken();

  useEffect ( async() => {
    try {
      const result= await getHotelsList(token);
      setHotels(result);
    } catch (err) {
      toast('Ops! Algo deu errado.');
    };
  }, [token]);

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

