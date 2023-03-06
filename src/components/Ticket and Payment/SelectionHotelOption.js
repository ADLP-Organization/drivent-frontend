import { useState } from 'react';
import styled from 'styled-components';
import TicketSummary from './TicketSummary';

export default function SelectionHotelType() {
  const [hotelOptonSelected, setHotelOptonSelected] = useState(null);

  return (
    <>
      <TitleTicketModel>Ótimo! Agora escolha sua modalidade de hospedagem</TitleTicketModel>
      <TicketModel><ButtonChoice onClick={() => setHotelOptonSelected(true)}><TicketType>Sem Hotel</TicketType><Price>+ R$ 0</Price></ButtonChoice> <ButtonChoice onClick={() => setHotelOptonSelected(true)} ><TicketType>Com Hotel</TicketType><Price>+ R$ 100</Price></ButtonChoice></TicketModel>
      {hotelOptonSelected? <TicketSummary/>: null}
    </>);
}

const TitleTicketModel = styled.div`
height: 23px;
width: 500px;
font-family: 'Roboto', sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23px;
letter-spacing: 0em;
color: #8E8E8E;
margin-top: 37px;
margin-bottom: 17px;
`;

const TicketModel = styled.div`
  width:310px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `;

const ButtonChoice = styled.div`
  height: 145px;
  width: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
 /*  background-color: #FFEED2; */
;
  

`;
const Price = styled.div`
height: 16px;
border-bottom: 3px;
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-weight: 100;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
margin-top: 3px;
color: #898989;
`;

const TicketType = styled.div`

`;
