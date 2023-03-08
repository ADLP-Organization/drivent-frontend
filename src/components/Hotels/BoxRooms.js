import styled from 'styled-components';
import { BsPerson, BsPersonFill } from 'react-icons/bs';
import { useState } from 'react';

export default function BoxRooms() {
  const [clickButton, setClickButton] = useState(false);
  return (
    <RoomContainer>
      <Room clickButton = {clickButton}><a>101</a><BsPersonFill size={30} color={'#FF4791'}/></Room>
      <Room><a>102</a><BsPerson size={30}/></Room>
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
