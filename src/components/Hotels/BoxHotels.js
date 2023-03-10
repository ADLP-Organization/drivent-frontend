import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useToken from '../../hooks/useToken';
import { getHotelsList } from '../../services/hotelApi';
import CardHotel from './CardHotel';

export default function BoxHotels({ setBookingStatus, setHotelId }) {
  const token = useToken();
  const [hotels, setHotels] = useState([]);

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

const AllHotels = styled.div`
width: 100%;
height: auto;
display: flex;
flex-wrap: wrap;
`;
