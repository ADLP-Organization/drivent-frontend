import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import { getHotelsList } from '../../services/hotelApi';
import CardHotel from './CardHotel';
import { AllHotels } from '../Hotels';

export default function BoxHotels({ setBookingStatus, setHotelId, hotels, setHotels}) {
  const token = useToken();

  useEffect ( async() => {
    try {
      const result = await getHotelsList(token);
      setHotels(result);
    } catch (err) {
      toast('Ops! Algo deu errado.');
      console.log(err.message);
    };
  }, []);

  return (
    <AllHotels>
      {hotels !== null && 
      hotels.map((h) =>
        <CardHotel 
          key={h.id}
          id={h.id}
          image={h.image}
          name={h.name}
          setHotelId={setHotelId}
          setBookingStatus={setBookingStatus}
        />
      )}
    </AllHotels>
  );
};

