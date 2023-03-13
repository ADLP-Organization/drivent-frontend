import styled from 'styled-components';
import { useState } from 'react';
import { postBooking } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';
import { useEffect } from 'react';
import { getRoomsByHotel } from '../../services/hotelApi';
import Rooms from './Rooms';

export default function BoxRooms({ setBookingStatus, setRoomData, hotelId }) {
  const token = useToken();
  const [rooms, setRooms] = useState([]);
  const [isClickedRoom, setIsClickedRoom] = useState(null);
  console.log();
  useEffect(() => {
    async function HotelsList() {
      try {
        const result = await getRoomsByHotel(token, hotelId);
        setRooms(result.Rooms);
        console.log(result);
      } catch (err) {
        console.log(err.message);
      }
    }
    HotelsList();
  }, [hotelId]);

  async function createBooking() {
    const booking =  {
      'roomId': isClickedRoom
    };
    try{
      await postBooking(token, booking);
      setBookingStatus('reserved');
    } catch(err) {
      // eslint-disable-next-line no-undef
      toast('Ops, Algo deu errado');
    }
  }

  return (
    <>
      <RoomContainer>
        {rooms.map((info) => <Rooms key={info.id} info={info} setRoomData={setRoomData} setIsClicked={setIsClickedRoom} isClicked={isClickedRoom} />)}
      </RoomContainer>
      <ButtonConfirmRoom onClick={createBooking}>RESERVAR QUARTO</ButtonConfirmRoom>
    </>

  );
};

const RoomContainer = styled.div`
width: 100%;
height: 212px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;

const ButtonConfirmRoom = styled.div`
height: 37px;
width: 182px;
border-radius: 4px;
background-color: #E0E0E0;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin-top: 30px;
`;

