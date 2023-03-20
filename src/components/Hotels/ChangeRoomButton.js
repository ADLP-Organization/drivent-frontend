import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ChangeRoomButton({ setBookingStatus, setRoomData, roomData }) {
  async function returnRoomsPage() {
    try{
      setRoomData(roomData);
      setBookingStatus('changeRoom');
    } catch(err) {
      toast('Ops, deu ruim');
    }
  }
  return(
    <Button onClick={() => returnRoomsPage()}>
        TROCAR DE QUARTO
    </Button>
  );
}

const Button = styled.div`
  height: 37px;
width: 182px;
border-radius: 4px;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
font-size: 14px;
font-family: 'Roboto', sans-serif;
background-color: #E0E0E0;
display: flex;
justify-content: center;
align-items: center;
margin-top: 30px;

  &:hover {
    cursor: pointer;
    background-color: #ccc;
  }
`;
