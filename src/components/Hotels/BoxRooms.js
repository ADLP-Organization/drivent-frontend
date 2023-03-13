import styled from 'styled-components';
import { useState } from 'react';
import useToken from '../../hooks/useToken';
import { useEffect } from 'react';
import { getRoomsByHotel, getBookingList, postBooking, upsertBooking  } from '../../services/hotelApi';
import Rooms from './Rooms';
import { toast } from 'react-toastify';

export default function BoxRooms({ setBookingStatus, setRoomData, hotelId }) {
  const token = useToken();
  const [rooms, setRooms] = useState([]);
  const [isClicked, setIsClicked] = useState(null);
  
  useEffect(() => {
    async function HotelsList() {
      try {
        const result = await getRoomsByHotel(token, hotelId);
        setRooms(result.Rooms);
        //console.log(result);
      } catch (err) {
        console.log(err.message);
      }
    }
    HotelsList();
  }, [hotelId]);
  
  async function reserve() {
    const booking =  {
      'roomId': isClicked
    };
    const existentBooking = await getBookingList(token);
    if(existentBooking === undefined || existentBooking === []) {
      try{
        await postBooking(token, booking);
        setBookingStatus('reserved');
      } catch(err) {
        // eslint-disable-next-line no-undef
        toast('Ops, Algo deu errado');
      }
    }else {
      upsertBooking(token, booking, existentBooking.id);
      setBookingStatus('reserved');
    }
  }
 
  return (
    <>
      <RoomContainer>
        {rooms.map((info) => <Rooms key={info.id} info={info} setRoomData={setRoomData} setIsClicked={setIsClicked} isClicked={isClicked} />)}
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
cursor: pointer;

`;

