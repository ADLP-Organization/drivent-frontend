import styled from 'styled-components';
import { useState } from 'react';
import useToken from '../../hooks/useToken';
import { useEffect } from 'react';
import { getRoomsByHotel, getBookingList, postBooking, upsertBooking  } from '../../services/hotelApi';
import Rooms from './Rooms';
import { toast } from 'react-toastify';

export default function BoxRooms({ setBookingStatus, setRoomData, hotelId, bookingStatus }) {
  const token = useToken();
  const [rooms, setRooms] = useState([]);
  const [isClickedRoom, setIsClickedRoom] = useState(null);
  
  useEffect(() => {
    async function HotelsList() {
      try {
        const result = await getRoomsByHotel(token, hotelId);
        setRooms(result.Rooms);
      } catch (err) {
        // eslint-disable-next-line
        console.log(err.message);
      }
    }
    HotelsList();
  }, [hotelId, bookingStatus]);
  
  async function reserve() {
    const booking =  {
      'roomId': isClickedRoom
    };
    const existentBooking = await getBookingList(token);
    if(existentBooking === undefined || existentBooking === []) {
      try{
        await postBooking(token, booking);
        setBookingStatus('reserved');
      } catch(err) {
        toast('Ops, Algo deu errado');
        // eslint-disable-next-line
        console.log(err.message);
      }
    }else {
      upsertBooking(token, booking, existentBooking.id);
      setBookingStatus('reserved');
    }
  }
 
  return (
    <>
      <RoomContainer>
        {rooms.map((info) => <Rooms key={info.id} info={info} setRoomData={setRoomData} setIsClicked={setIsClickedRoom} isClicked={isClickedRoom} />)}
      </RoomContainer>
      <ButtonConfirmRoom onClick={reserve}>RESERVAR QUARTO</ButtonConfirmRoom>
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

