import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { useState } from 'react';
import { postBooking } from '../../services/hotelApi';
import useToken from '../../hooks/useToken';

export default function BoxRooms({ setBookingStatus, setRoomData } ) {
  const [clickButton, setClickButton] = useState(false);
  const token = useToken();
  
  async function createBooking(id, roomInfo) {
    console.log(id);
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

  return (
    <RoomContainer>
      <Room clickButton = {clickButton} onClick={() => createBooking(37, /*roomInfo*/)}><a>101</a><BsPersonFill size={30} color={'#FF4791'}/></Room>
      <Room clickButton = {clickButton} onClick={() => createBooking(38, /*roomInfo*/)}><a>102</a><BsPersonFill size={30} color={'#FF4791'}/></Room>      
      <Room><a>103</a><BsPerson size={30}/></Room>
      <Room><a>104</a><BsPerson size={30}/></Room>
      <Room><a>201</a><BsPerson size={30}/></Room>
      <Room><a>202</a><BsPerson size={30}/></Room>
      <Room><a>203</a><BsPerson size={30}/></Room>
      <Room><a>204</a><BsPerson size={30}/></Room>
      <Room><a>101</a><BsPerson size={30}/></Room>
      <Room><a>102</a><BsPerson size={30}/></Room>
      <Room><a>103</a><BsPerson size={30}/></Room>
      <Room><a>104</a><BsPerson size={30}/></Room>
      <Room><a>201</a><BsPerson size={30}/></Room>
      <Room><a>202</a><BsPerson size={30}/></Room>
      <Room><a>203</a><BsPerson size={30}/></Room>
      <Room><a>204</a><BsPerson size={30}/></Room>
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

const Room = styled.div`
  height: 45px;
  width: 190px;
  border-radius: 10px;
  border: 1px solid #CECECE;
  display: flex;
  align-items:center;
  justify-content: space-between;
  padding-right: 12.28px;
  margin-bottom: 8px;
  background-color: ${(prop) => (!prop.clickButton ? '#FFEED2' : '#FFFFFF')};
  a{
    height: 23px;
    width: 35px;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    text-align: center;
    color: #454545;
    margin-left:16px;
  }
`;
