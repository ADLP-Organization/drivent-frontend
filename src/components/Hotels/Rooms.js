import { useEffect, useState } from 'react';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import styled from 'styled-components';
import useToken from '../../hooks/useToken';
import PersonIcons from './PersonIcons';

export default function Rooms({ info, setRoomData, setIsClicked, isClicked }) {
  const [roomId, setRoomId] = useState();
  const token = useToken();
  const [color, setColor] = useState('#FFFFFF');
  const capacity = info.capacity;
  const placesOccupied = info.Booking.length;
  const vacancies = capacity - placesOccupied;

  function selectRoom() {
    setIsClicked(info.id);
    setRoomData(info);
  
    let roomDescription = [];
    for (let i = 0; i < vacancies; i++) {
      if( i === (vacancies -1) ) {
        roomDescription.push(<Icon isClicked={isClicked} id={info.id}><BsPerson size={30} /></Icon>);
      }else {
        roomDescription.push(<Icon isClicked={isClicked} id={0}><BsPerson size={30} /></Icon>);
      }; 
    }
    for (let j = 0; j < placesOccupied; j++) {
      roomDescription.push(<BsPersonFill size={30} />);
    }
}
  return (
    <Room onClick={selectRoom} isClicked={isClicked} roomId={info.id}><a>{info.name}</a><PersonIcons isClicked={isClicked} id={info.id}>{roomDescription}</PersonIcons></Room>
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
const ContainerPersonIcons = styled.div`

`;

export const Icon = styled.span`
 color:${(props) => (props.isClicked === props.id? '#FF4791' : '')};
`;
