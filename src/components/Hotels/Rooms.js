import { useState } from 'react';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';

export default function Rooms({ info, setRoomData, setIsClicked, isClicked }) {
  const [roomId, setRoomId] = useState();
  const token = useToken();
  const capacity = info.capacity;
  const placesOccupied = info.Booking.length;
  const vacancies = capacity - placesOccupied;
  
  function selectRoom() {
    setIsClicked(info.id);
  }

  let roomDescription = [];
  for (let i = 0; i < vacancies; i++) {
    roomDescription.push(<BsPerson size={30} />);
  }
  for (let j = 0; j < placesOccupied; j++) {
    roomDescription.push(<BsPersonFill size={30} />);
  }

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
  } */

  return (
    <Room onClick={selectRoom} isClicked={isClicked} roomId={info.id}><a>{info.name}</a><PersonIcons>{roomDescription}</PersonIcons></Room>
  );
};

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
  background-color: ${(props) => (props.isClicked === props.roomId? '#FFEED2' : '#FFFFFF')};
  color:${(props) => (props.isClicked === props.roomId? '#FF4791' : '')};;
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

  &:hover {
  cursor: pointer;
  background-color: #ccc;
}
`;

const PersonIcons = styled.div`

`;
