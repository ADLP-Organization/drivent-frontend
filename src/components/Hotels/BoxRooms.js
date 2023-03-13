import styled from 'styled-components';
import { useState } from 'react';
import { postBooking } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';
import { useEffect } from 'react';
import { getRoomsByHotel } from '../../services/hotelApi';
import Rooms from './Rooms';

export default function BoxRooms({ setBookingStatus, setRoomData, hotels }) {
  const token = useToken();
  const [rooms, setRooms] = useState([]);
  const [isClicked, setIsClicked] = useState(null);
  console.log();
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

  /* async function createBooking(id, roomInfo) {

    const booking =  {
      'roomId': id
    };
    try{
      await postBooking(token, booking);
      setRoomData({
        name: '104',
        capacity: 3,
        hotelId: 1,
        createdAt: '23-03-2022',
        updatedAt: '23-03-2022',
      });
      setBookingStatus('reserved');
    } catch(err) {
      // eslint-disable-next-line no-undef
      toast('Ops, deu ruim');
    }
  }
 */
  return (
    <>
      <RoomContainer>
        {rooms.map((info) => <Rooms key={info.id} info={info} setRoomData={setRoomData} setIsClicked={setIsClicked} isClicked={isClicked} />)}
      </RoomContainer>
      <ButtonConfirmRoom>RESERVAR QUARTO</ButtonConfirmRoom>
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
`;

