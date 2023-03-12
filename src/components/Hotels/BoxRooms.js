import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { getRoomsByHotel } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';
import Rooms from './Rooms';

export default function BoxRooms({ setBookingStatus }) {
  const [clickButton, setClickButton] = useState(false);
  const [rooms, setRooms] = useState([]);

  const token = useToken();
  useEffect(() => {
    async function HotelsList() {
      try {
        const result = await getRoomsByHotel(token/* , hotelId */);
        setRooms(result.Rooms);
        console.log(result);
      } catch (err) {
        console.log(err.message);
      }
    }
    HotelsList();
  }, []);
  return (
    <RoomContainer>
      {rooms.map((info) => <Rooms key={info.id} info={info} />)}
    </RoomContainer>
  );
};

const RoomContainer = styled.div`
width: 100%;
height: 212px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;
